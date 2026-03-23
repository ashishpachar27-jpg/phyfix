// Gmail Integration for Email Notifications
// Uses Replit's Gmail connector (google-mail integration)

import { google } from 'googleapis';

let connectionSettings: any;

async function getAccessToken() {
  if (connectionSettings && connectionSettings.settings.expires_at && new Date(connectionSettings.settings.expires_at).getTime() > Date.now()) {
    return connectionSettings.settings.access_token;
  }
  
  const hostname = process.env.REPLIT_CONNECTORS_HOSTNAME;
  const xReplitToken = process.env.REPL_IDENTITY 
    ? 'repl ' + process.env.REPL_IDENTITY 
    : process.env.WEB_REPL_RENEWAL 
    ? 'depl ' + process.env.WEB_REPL_RENEWAL 
    : null;

  if (!xReplitToken) {
    throw new Error('X_REPLIT_TOKEN not found for repl/depl');
  }

  connectionSettings = await fetch(
    'https://' + hostname + '/api/v2/connection?include_secrets=true&connector_names=google-mail',
    {
      headers: {
        'Accept': 'application/json',
        'X_REPLIT_TOKEN': xReplitToken
      }
    }
  ).then(res => res.json()).then(data => data.items?.[0]);

  const accessToken = connectionSettings?.settings?.access_token ?? connectionSettings?.settings?.oauth?.credentials?.access_token;

  if (!connectionSettings || !accessToken) {
    throw new Error('Gmail not connected');
  }
  return accessToken;
}

async function getUncachableGmailClient() {
  const accessToken = await getAccessToken();

  const oauth2Client = new google.auth.OAuth2();
  oauth2Client.setCredentials({
    access_token: accessToken
  });

  return google.gmail({ version: 'v1', auth: oauth2Client });
}

// Create email message in RFC 2822 format
function createEmail(to: string, subject: string, body: string): string {
  const message = [
    `To: ${to}`,
    `Subject: ${subject}`,
    'Content-Type: text/html; charset=utf-8',
    '',
    body
  ].join('\r\n');
  
  // Base64url encode the message
  return Buffer.from(message)
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');
}

// Send notification email to admin when a new teacher registers
export async function sendNewTeacherNotification(teacherData: {
  name: string;
  email: string;
  subjects: string[];
  boards: string[];
  experienceYears: number;
  qualifications: string[];
}) {
  const adminEmail = 'ashishpachar27@gmail.com';
  
  const subject = `[PhyFix] New Teacher Registration: ${teacherData.name}`;
  
  const body = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #4f46e5;">New Teacher Registration</h2>
      <p>A new teacher has registered on PhyFix and is awaiting your approval.</p>
      
      <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="margin-top: 0;">Teacher Details</h3>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; font-weight: bold;">Name:</td>
            <td style="padding: 8px 0;">${teacherData.name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold;">Email:</td>
            <td style="padding: 8px 0;">${teacherData.email}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold;">Experience:</td>
            <td style="padding: 8px 0;">${teacherData.experienceYears} years</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold;">Subjects:</td>
            <td style="padding: 8px 0;">${teacherData.subjects.join(', ')}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold;">Boards:</td>
            <td style="padding: 8px 0;">${teacherData.boards.join(', ')}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold;">Qualifications:</td>
            <td style="padding: 8px 0;">${teacherData.qualifications.join(', ')}</td>
          </tr>
        </table>
      </div>
      
      <p>
        <a href="https://phyfix.replit.app/admin" 
           style="display: inline-block; background: #4f46e5; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px;">
          Review in Admin Panel
        </a>
      </p>
      
      <p style="color: #64748b; font-size: 14px; margin-top: 20px;">
        This is an automated notification from PhyFix.
      </p>
    </div>
  `;

  try {
    const gmail = await getUncachableGmailClient();
    const encodedMessage = createEmail(adminEmail, subject, body);
    
    await gmail.users.messages.send({
      userId: 'me',
      requestBody: {
        raw: encodedMessage
      }
    });
    
    console.log(`Email notification sent to ${adminEmail} for new teacher: ${teacherData.name}`);
    return true;
  } catch (error) {
    console.error('Failed to send email notification:', error);
    return false;
  }
}

// Send approval notification to teacher
export async function sendApprovalNotification(teacherEmail: string, teacherName: string, approved: boolean) {
  const subject = approved 
    ? `[PhyFix] Your Profile Has Been Approved!` 
    : `[PhyFix] Profile Update Required`;
  
  const body = approved
    ? `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #22c55e;">Congratulations, ${teacherName}!</h2>
        <p>Your teacher profile on PhyFix has been approved and is now live.</p>
        <p>Students can now find you and book demo sessions.</p>
        
        <p>
          <a href="https://phyfix.replit.app/teachers" 
             style="display: inline-block; background: #4f46e5; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px;">
            View Your Profile
          </a>
        </p>
        
        <p style="color: #64748b; font-size: 14px; margin-top: 20px;">
          Welcome to the PhyFix family!
        </p>
      </div>
    `
    : `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #f59e0b;">Profile Review Required</h2>
        <p>Hi ${teacherName},</p>
        <p>Your profile on PhyFix needs some updates before it can be approved.</p>
        <p>Please contact us at ashishpachar27@gmail.com for more details.</p>
        
        <p style="color: #64748b; font-size: 14px; margin-top: 20px;">
          Thank you for your patience.
        </p>
      </div>
    `;

  try {
    const gmail = await getUncachableGmailClient();
    const encodedMessage = createEmail(teacherEmail, subject, body);
    
    await gmail.users.messages.send({
      userId: 'me',
      requestBody: {
        raw: encodedMessage
      }
    });
    
    console.log(`Approval notification sent to ${teacherEmail}`);
    return true;
  } catch (error) {
    console.error('Failed to send approval notification:', error);
    return false;
  }
}
