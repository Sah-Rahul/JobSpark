export const PasswordResetSuccessEmailTemplate = (userName: string): string => {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Password Reset Successful – JobSpark</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" rel="stylesheet"/>
</head>
<body style="margin:0;padding:0;background-color:#f5f4f2;font-family:'Inter',sans-serif;">

  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0"
    style="background-color:#f5f4f2;padding:40px 16px;">
    <tr>
      <td align="center">

        <table role="presentation" width="600" cellspacing="0" cellpadding="0" border="0"
          style="max-width:600px;width:100%;background-color:#ffffff;border-radius:16px;
                 overflow:hidden;border:1px solid #e5e3df;">

          <!-- HERO -->
          <tr>
            <td style="background-color:#fafaf9;padding:44px 40px 36px;text-align:center;border-bottom:1px solid #e5e3df;">
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" style="margin:0 auto 16px;">
                <tr>
                  <td>
                    <div style="display:inline-block;width:44px;height:44px;background-color:#EA580C;
                      border-radius:10px;text-align:center;line-height:44px;font-size:22px;
                      margin-right:10px;vertical-align:middle;">⚡</div>
                    <span style="font-size:26px;font-weight:500;color:#1a1a1a;
                      letter-spacing:-0.5px;vertical-align:middle;">JobSpark</span>
                  </td>
                </tr>
              </table>
              <p style="margin:0;font-size:12px;color:#9ca3af;letter-spacing:2.5px;
                text-transform:uppercase;font-weight:500;">Your career, ignited</p>
            </td>
          </tr>

          <!-- BODY -->
          <tr>
            <td style="padding:40px 40px 28px;">

              <!-- Success icon -->
              <div style="width:52px;height:52px;border-radius:50%;background-color:#F0FDF4;
                border:1px solid #86EFAC;text-align:center;line-height:52px;
                font-size:22px;margin-bottom:20px;">✓</div>

              <p style="margin:0 0 8px;font-size:22px;font-weight:500;color:#1a1a1a;">
                Password reset successfully
              </p>
              <div style="width:36px;height:3px;background-color:#EA580C;border-radius:2px;margin-bottom:20px;"></div>

              <p style="margin:0 0 14px;font-size:15px;color:#6b7280;line-height:1.7;">
                Hi <strong style="color:#1a1a1a;">${userName}</strong>, your JobSpark account password has been successfully updated.
              </p>
              <p style="margin:0 0 28px;font-size:15px;color:#6b7280;line-height:1.7;">
                You can now log in with your new password. If you didn't make this change, contact us immediately.
              </p>

              <!-- Success strip -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="margin-bottom:28px;">
                <tr>
                  <td style="background-color:#F0FDF4;border:1px solid #86EFAC;border-radius:8px;padding:16px 20px;">
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                      <tr>
                        <td style="vertical-align:top;padding-top:2px;">🛡️</td>
                        <td style="padding-left:12px;">
                          <p style="margin:0;font-size:13px;color:#166534;line-height:1.6;">
                            Your account is secure. This change was applied on
                            <strong>${new Date().toLocaleDateString('en-US', { weekday:'long', year:'numeric', month:'long', day:'numeric' })}</strong>.
                          </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- CTA -->
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" style="margin:0 0 32px;">
                <tr>
                  <td style="background-color:#EA580C;border-radius:8px;">
                    <a href="https://jobspark.com/login"
                      style="display:inline-block;padding:14px 40px;color:#ffffff;
                             font-size:15px;font-weight:500;text-decoration:none;border-radius:8px;">
                      → &nbsp; Log in to JobSpark
                    </a>
                  </td>
                </tr>
              </table>

              <!-- Warning banner -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="margin-bottom:32px;">
                <tr>
                  <td style="background-color:#FFF7ED;border:1px solid #FDBA74;border-radius:8px;padding:16px 20px;">
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                      <tr>
                        <td style="vertical-align:top;padding-top:2px;">⚠️</td>
                        <td style="padding-left:12px;">
                          <p style="margin:0;font-size:13px;color:#92400E;line-height:1.6;">
                            If you did not reset your password, your account may be at risk.
                            Please <a href="mailto:support@jobspark.com"
                              style="color:#EA580C;font-weight:500;text-decoration:none;">
                              contact support immediately</a> and change your password right away.
                          </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Security tips -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td style="border:1px solid #e5e3df;border-radius:10px;overflow:hidden;">
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                      <tr>
                        <td style="background-color:#fafaf9;padding:14px 20px;border-bottom:1px solid #e5e3df;">
                          <p style="margin:0;font-size:12px;font-weight:500;color:#9ca3af;
                            text-transform:uppercase;letter-spacing:1.5px;">Password security tips</p>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:12px 20px;border-bottom:1px solid #e5e3df;">
                          <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                            <tr>
                              <td style="color:#EA580C;font-size:13px;padding-right:10px;vertical-align:top;padding-top:2px;">✓</td>
                              <td style="font-size:13px;color:#6b7280;line-height:1.5;">Use at least 8 characters with letters, numbers, and symbols.</td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:12px 20px;border-bottom:1px solid #e5e3df;">
                          <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                            <tr>
                              <td style="color:#EA580C;font-size:13px;padding-right:10px;vertical-align:top;padding-top:2px;">✓</td>
                              <td style="font-size:13px;color:#6b7280;line-height:1.5;">Avoid using personal information or commonly used words.</td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:12px 20px;">
                          <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                            <tr>
                              <td style="color:#EA580C;font-size:13px;padding-right:10px;vertical-align:top;padding-top:2px;">✓</td>
                              <td style="font-size:13px;color:#6b7280;line-height:1.5;">Enable two-factor authentication for maximum account security.</td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- FOOTER -->
          <tr>
            <td style="border-top:1px solid #e5e3df;padding:24px 40px;text-align:center;">
              <p style="margin:0 0 6px;font-size:13px;color:#6b7280;">
                Need help? &nbsp;
                <a href="mailto:support@jobspark.com"
                  style="color:#EA580C;text-decoration:none;font-weight:500;">
                  support@jobspark.com
                </a>
              </p>
              <p style="margin:0;font-size:12px;color:#9ca3af;">
                © ${new Date().getFullYear()} JobSpark · All rights reserved
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>

</body>
</html>
  `;
};