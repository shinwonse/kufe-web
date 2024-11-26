import Link from "next/link";

const Header = () => {
  return (
    <nav className="p-4 text-white bg-black">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">KUFE</div>
          <ul className="flex space-x-6">
            <li>소개</li>
            <li><Link href="/articles">자료 공유</Link></li>
            <li><Link href="/jobs">채용 공고</Link></li>
            <li className="bg-[#b0cda6] text-black px-3 py-1 rounded">가입하기</li>
          </ul>
        </div>
      </nav>
  )
};

export default Header;
