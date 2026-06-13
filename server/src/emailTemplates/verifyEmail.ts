export const verifyEmail = (verificationUrl: string): string => {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Verify Your Email – JobSpark</title>
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
                    <div style="display:inline-block;width:44px;height:44px;background-color:#EA580C;border-radius:10px;
                      text-align:center;line-height:44px;font-size:22px;margin-right:10px;vertical-align:middle;">
                      ⚡
                    </div>
                    <span style="font-size:26px;font-weight:500;color:#1a1a1a;letter-spacing:-0.5px;vertical-align:middle;">
                      JobSpark
                    </span>
                  </td>
                </tr>
              </table>
              <p style="margin:0;font-size:12px;color:#9ca3af;letter-spacing:2.5px;text-transform:uppercase;font-weight:500;">
                Your career, ignited
              </p>
            </td>
          </tr>

          <!-- BODY -->
          <tr>
            <td style="padding:40px 40px 28px;">

              <p style="margin:0 0 20px;font-size:22px;font-weight:500;color:#1a1a1a;">
                Verify your email address
              </p>
              <div style="width:36px;height:3px;background-color:#EA580C;border-radius:2px;margin-bottom:20px;"></div>

              <p style="margin:0 0 14px;font-size:15px;color:#6b7280;line-height:1.7;">
                Welcome to JobSpark! You're one step away from finding your next big opportunity.
              </p>
              <p style="margin:0 0 32px;font-size:15px;color:#6b7280;line-height:1.7;">
                Click the button below to confirm your email and activate your account.
                This link expires in <strong style="color:#1a1a1a;">15 minutes</strong>.
              </p>

              <!-- CTA -->
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" style="margin:0 0 32px;">
                <tr>
                  <td style="background-color:#EA580C;border-radius:8px;">
                    <a href="${verificationUrl}"
                      style="display:inline-block;padding:14px 40px;color:#ffffff;font-size:15px;
                             font-weight:500;text-decoration:none;border-radius:8px;">
                      ⚡ &nbsp; Verify my email
                    </a>
                  </td>
                </tr>
              </table>

              <!-- Fallback URL -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td style="background-color:#fafaf9;border:1px solid #e5e3df;border-left:3px solid #EA580C;
                             border-radius:0 8px 8px 0;padding:14px 18px;">
                    <p style="margin:0 0 5px;font-size:11px;color:#9ca3af;text-transform:uppercase;
                              letter-spacing:1.5px;font-weight:500;">
                      Button not working? Copy this link:
                    </p>
                    <p style="margin:0;font-size:13px;color:#EA580C;word-break:break-all;line-height:1.5;">
                      ${verificationUrl}
                    </p>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- INFO BANNER -->
          <tr>
            <td style="padding:0 40px 32px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td style="background-color:#fafaf9;border:1px solid #e5e3df;border-radius:8px;padding:16px 20px;">
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                      <tr>
                        <td style="vertical-align:top;padding-top:2px;">🛡️</td>
                        <td style="padding-left:12px;">
                          <p style="margin:0;font-size:13px;color:#6b7280;line-height:1.6;">
                            If you didn't create a JobSpark account, you can safely ignore this email.
                          </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- STATS STRIP -->
          <tr>
            <td style="padding:0 40px 32px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td width="33%" style="background-color:#fafaf9;border:1px solid #e5e3df;border-radius:8px;
                                         padding:14px 16px;text-align:center;">
                    <p style="margin:0 0 4px;font-size:18px;font-weight:500;color:#1a1a1a;">50k+</p>
                    <p style="margin:0;font-size:12px;color:#9ca3af;">Job listings</p>
                  </td>
                  <td width="2%"></td>
                  <td width="33%" style="background-color:#fafaf9;border:1px solid #e5e3df;border-radius:8px;
                                         padding:14px 16px;text-align:center;">
                    <p style="margin:0 0 4px;font-size:18px;font-weight:500;color:#1a1a1a;">12k+</p>
                    <p style="margin:0;font-size:12px;color:#9ca3af;">Companies</p>
                  </td>
                  <td width="2%"></td>
                  <td width="33%" style="background-color:#fafaf9;border:1px solid #e5e3df;border-radius:8px;
                                         padding:14px 16px;text-align:center;">
                    <p style="margin:0 0 4px;font-size:18px;font-weight:500;color:#1a1a1a;">98%</p>
                    <p style="margin:0;font-size:12px;color:#9ca3af;">Satisfaction</p>
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
                <a href="mailto:sahfamilyinfo.com"
                  style="color:#EA580C;text-decoration:none;font-weight:500;">
                  sahfamilyinfo.com
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