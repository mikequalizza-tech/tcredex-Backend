export function sendEmail(to, subject, body){
  // Stub for email provider integration (SendGrid, SES, etc)
  return {
    to, subject, body,
    sentAt: new Date().toISOString()
  };
}
