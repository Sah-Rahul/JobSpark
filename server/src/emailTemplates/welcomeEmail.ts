export const WelcomeEmailTemplate = (
  userName: string,
  dashboardUrl: string,
): string => {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Welcome to JobSpark – ${userName}</title>
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

              <p style="margin:0 0 6px;font-size:12px;color:#EA580C;letter-spacing:2px;
                text-transform:uppercase;font-weight:500;">Welcome JobSpark</p>

              <p style="margin:0 0 8px;font-size:26px;font-weight:500;color:#1a1a1a;">
                Hello, ${userName}! 👋
              </p>
              <div style="width:36px;height:3px;background-color:#EA580C;border-radius:2px;margin-bottom:20px;"></div>

              <p style="margin:0 0 32px;font-size:15px;color:#6b7280;line-height:1.7;">
                We're thrilled to have you on JobSpark. Your profile is live and thousands of companies are already hiring. Let's find your next big opportunity.
              </p>

              <!-- FEATURE CARDS 2x2 -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="margin-bottom:32px;">
                <tr>
                  <td width="50%" style="vertical-align:top;padding-right:6px;padding-bottom:12px;">
                    <div style="background-color:#fafaf9;border:1px solid #e5e3df;border-radius:10px;padding:18px 20px;">
                      <p style="margin:0 0 10px;font-size:20px;">💼</p>
                      <p style="margin:0 0 4px;font-size:14px;font-weight:500;color:#1a1a1a;">50k+ Job listings</p>
                      <p style="margin:0;font-size:13px;color:#9ca3af;line-height:1.5;">Across all industries</p>
                    </div>
                  </td>
                  <td width="50%" style="vertical-align:top;padding-left:6px;padding-bottom:12px;">
                    <div style="background-color:#fafaf9;border:1px solid #e5e3df;border-radius:10px;padding:18px 20px;">
                      <p style="margin:0 0 10px;font-size:20px;">🏢</p>
                      <p style="margin:0 0 4px;font-size:14px;font-weight:500;color:#1a1a1a;">12k+ Companies</p>
                      <p style="margin:0;font-size:13px;color:#9ca3af;line-height:1.5;">Actively recruiting</p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td width="50%" style="vertical-align:top;padding-right:6px;">
                    <div style="background-color:#fafaf9;border:1px solid #e5e3df;border-radius:10px;padding:18px 20px;">
                      <p style="margin:0 0 10px;font-size:20px;">📄</p>
                      <p style="margin:0 0 4px;font-size:14px;font-weight:500;color:#1a1a1a;">AI Resume builder</p>
                      <p style="margin:0;font-size:13px;color:#9ca3af;line-height:1.5;">Stand out instantly</p>
                    </div>
                  </td>
                  <td width="50%" style="vertical-align:top;padding-left:6px;">
                    <div style="background-color:#fafaf9;border:1px solid #e5e3df;border-radius:10px;padding:18px 20px;">
                      <p style="margin:0 0 10px;font-size:20px;">🔔</p>
                      <p style="margin:0 0 4px;font-size:14px;font-weight:500;color:#1a1a1a;">Smart job alerts</p>
                      <p style="margin:0;font-size:13px;color:#9ca3af;line-height:1.5;">Never miss a match</p>
                    </div>
                  </td>
                </tr>
              </table>

              <!-- CTA -->
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" style="margin:0 0 8px;">
                <tr>
                  <td style="background-color:#EA580C;border-radius:8px;">
                    <a href="${dashboardUrl}"
                      style="display:inline-block;padding:14px 40px;color:#ffffff;
                             font-size:15px;font-weight:500;text-decoration:none;border-radius:8px;">
                      🔍 &nbsp; Browse jobs now
                    </a>
                  </td>
                </tr>
              </table>
              <p style="margin:0 0 32px;font-size:13px;color:#9ca3af;">Takes less than 2 minutes to apply to your first job.</p>
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