import Link from 'next/link';

const Header = () => {
  return (
    <nav className="bg-transparent p-4 text-white">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold">KUFE</div>
        <ul className="flex space-x-6">
          <li>
            <Link href="/articles">자료 공유</Link>
          </li>
          <li>
            <Link href="/jobs">채용 공고</Link>
          </li>
          <li className="rounded bg-[#b0cda6] px-3 py-1 text-black">가입하기</li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
