import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-blue-50 font-sans">
      {/* 헤더 */}
      <header className="w-full flex justify-between items-center py-6 px-6 sm:px-16 bg-white/80 shadow-sm sticky top-0 z-10">
        <div className="flex items-center gap-2">
          <Image src="/globe.svg" alt="러닝크루 로고" width={32} height={32} />
          <span className="text-2xl font-bold tracking-tight text-blue-700">러닝크루</span>
        </div>
        <nav className="hidden sm:flex gap-8 text-blue-700 font-medium">
          <a href="#about" className="hover:underline">소개</a>
          <a href="#features" className="hover:underline">특징</a>
          <a href="#join" className="hover:underline">가입하기</a>
        </nav>
      </header>

      {/* 메인 섹션 */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-16 gap-20">
        {/* 소개 */}
        <section id="about" className="max-w-2xl text-center flex flex-col gap-6">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-800 mb-2">함께 성장하는 러닝크루</h1>
          <p className="text-lg sm:text-xl text-gray-700">
            러닝크루는 함께 배우고 성장하는 사람들의 모임입니다.<br/>
            다양한 분야의 크루원들과 함께 목표를 이루어보세요!
          </p>
          <a href="#join" className="inline-block mt-4 px-8 py-3 bg-blue-700 text-white rounded-full font-semibold text-lg shadow hover:bg-blue-800 transition">지금 가입하기</a>
        </section>

        {/* 특징 */}
        <section id="features" className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-3 gap-8 mt-8">
          <div className="flex flex-col items-center bg-white rounded-xl shadow p-6 gap-4">
            <Image src="/window.svg" alt="커뮤니티" width={40} height={40} />
            <h3 className="text-xl font-bold text-blue-700">다양한 커뮤니티</h3>
            <p className="text-gray-600 text-center">관심사별 소모임과 프로젝트로<br/>함께 성장할 수 있어요.</p>
          </div>
          <div className="flex flex-col items-center bg-white rounded-xl shadow p-6 gap-4">
            <Image src="/file.svg" alt="지식공유" width={40} height={40} />
            <h3 className="text-xl font-bold text-blue-700">지식 공유</h3>
            <p className="text-gray-600 text-center">스터디, 세미나, 멘토링 등<br/>지식을 나누는 다양한 기회!</p>
          </div>
          <div className="flex flex-col items-center bg-white rounded-xl shadow p-6 gap-4">
            <Image src="/next.svg" alt="성장지원" width={40} height={40} />
            <h3 className="text-xl font-bold text-blue-700">성장 지원</h3>
            <p className="text-gray-600 text-center">목표 설정부터 피드백까지<br/>함께 성장하는 환경을 제공합니다.</p>
          </div>
        </section>

        {/* CTA */}
        <section id="join" className="flex flex-col items-center gap-4 mt-12">
          <h2 className="text-2xl font-bold text-blue-800">지금 바로 러닝크루에 합류하세요!</h2>
          <a href="#" className="px-8 py-3 bg-blue-600 text-white rounded-full font-semibold text-lg shadow hover:bg-blue-700 transition">가입하기</a>
        </section>
      </main>

      {/* 푸터 */}
      <footer className="w-full py-6 text-center text-gray-500 text-sm bg-white/70 mt-auto">
        © {new Date().getFullYear()} 러닝크루. 모두의 성장을 응원합니다.
      </footer>
    </div>
  );
}
