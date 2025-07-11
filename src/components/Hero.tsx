export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center space-y-6 z-10 relative px-4">
      <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white">
        Lê Viết Nguyên Hưng
      </h1>
      <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
        Sinh viên năm cuối ngành Kỹ thuật phần mềm tại Đại học Công nghiệp TP.HCM.
        <br />
        Hiện đang tìm kiếm cơ hội thực tập để học hỏi và phát triển kỹ năng.
      </p>
      <p className="text-gray-400 max-w-xl text-sm leading-relaxed">
        Với khả năng giao tiếp tốt và tư duy phân tích vấn đề rõ ràng,
        tôi hy vọng được làm việc trong môi trường chuyên nghiệp để nâng cao kinh nghiệm thực tế.
      </p>
      <a
        href="/contact"
        className="mt-4 px-6 py-2 border border-gray-400 rounded hover:bg-gray-100 hover:text-black transition text-sm"
      >
        Liên hệ với tôi
      </a>
    </section>
  )
}
