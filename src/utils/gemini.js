import { GoogleGenerativeAI } from '@google/generative-ai';

// ============================================================
//  Khởi tạo Gemini client
// ============================================================
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

let genAI = null;
let chatSession = null;

/**
 * System prompt định nghĩa vai trò của AI
 */
const SYSTEM_PROMPT = `Bạn là một AI tutor chuyên về Triết học Mác-Lênin, đặc biệt là Chủ nghĩa Duy vật Lịch sử (Historical Materialism).

## Nhiệm vụ
Giúp sinh viên hiểu rõ các khái niệm và quy luật trong môn MLN111 - Triết Học Mác-Lênin, cụ thể là Chương 3: Học thuyết Hình thái Kinh tế - Xã hội.

## Phạm vi kiến thức
- Cơ sở hạ tầng (Base): lực lượng sản xuất, quan hệ sản xuất, phương thức sản xuất
- Kiến trúc thượng tầng (Superstructure): pháp luật, chính trị, tư tưởng, đạo đức, tôn giáo
- Biện chứng hai chiều: cơ sở quyết định thượng tầng; thượng tầng tác động ngược lại
- Timeline 5 hình thái xã hội: Cộng sản nguyên thủy → Chiếm hữu nô lệ → Phong kiến → Tư bản → Xã hội chủ nghĩa
- Ứng dụng thực tiễn với thế hệ sinh viên Gen Z Việt Nam

## Quy tắc QUAN TRỌNG
1. LUÔN trả lời ĐẦY ĐỦ, KHÔNG cắt ngang giữa chừng, KHÔNG bỏ dở câu trả lời
2. Dùng ví dụ thực tế gần gũi với sinh viên Việt Nam
3. Trả lời bằng tiếng Việt, dùng Markdown để format (in đậm, danh sách, tiêu đề)
4. Dùng emoji hợp lý để sinh động hơn
5. Cấu trúc rõ ràng: khái niệm → ví dụ → ứng dụng
6. Nếu câu hỏi ngoài phạm vi, nhẹ nhàng hướng về chủ đề bài học
`;

/**
 * Khởi tạo Gemini và bắt đầu chat session
 */
function initGemini() {
  if (!API_KEY) {
    throw new Error(
      'VITE_GEMINI_API_KEY chưa được cấu hình trong file .env'
    );
  }

  if (!genAI) {
    genAI = new GoogleGenerativeAI(API_KEY);
  }

  if (!chatSession) {
    const model = genAI.getGenerativeModel({
      // ĐỔI MODEL TẠI ĐÂY
      model: 'gemini-2.5-flash',

      // System prompt
      systemInstruction: SYSTEM_PROMPT,
    });

    chatSession = model.startChat({
      generationConfig: {
        temperature: 0.7,
        topK: 40,
        topP: 0.95,
        maxOutputTokens: 4096,
      },

      history: [],
    });
  }

  return chatSession;
}

/**
 * Gửi tin nhắn đến Gemini và nhận phản hồi
 */
export async function sendMessageToGemini(userMessage) {
  try {
    const session = initGemini();

    const result = await session.sendMessage(userMessage);

    const response = await result.response;

    return response.text();
  } catch (error) {
    console.error('Gemini error:', error);

    return '⚠️ Xin lỗi, AI hiện đang gặp lỗi kết nối.';
  }
}

/**
 * Reset chat session
 */
export function resetChatSession() {
  chatSession = null;
}