import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/lib/cn';

const Header = () => {
  return (
    <nav className={cn('flex h-16 flex-row items-center bg-black/20 px-4 text-white')}>
      <div className={cn('container mx-auto flex items-center justify-between')}>
        <Link href="/">
          <Image src="/logo.png" alt="KUFE" width={50} height={50} />
        </Link>
        <ul className={cn('flex items-center space-x-6')}>
          <li className={cn('font-bold hover:text-gray-300')}>
            <Link href="/articles">아티클 읽기</Link>
          </li>
          <li className={cn('font-bold hover:text-gray-300')}>
            <Link href="/jobs">채용 공고</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
