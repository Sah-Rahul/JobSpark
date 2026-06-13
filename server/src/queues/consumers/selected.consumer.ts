// import { QUEUES, JobSelectedPayload } from "../../constant/queue.constant";
// import { sendSelectionEmail } from "../../services/nodemailer.services";
// import { createConsumer } from "./baseConsumer";

// export const startSelectedConsumer = async (): Promise<void> => {
//   await createConsumer<JobSelectedPayload>(
//     QUEUES.JOB_SELECTED,
//     async (payload) => {
//       await sendSelectionEmail(payload);
//       console.log(`✅ Selection email sent: ${payload.email}`);
//     }
//   );
// };