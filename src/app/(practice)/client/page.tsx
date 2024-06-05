'use client';

import LinkButton from '@/components/common/button/LinkButton';
import Link from 'next/link';

export default function Page() {
    return (
        <Link href="/client/client2" passHref legacyBehavior>
            <LinkButton>클라이언트2로 이동</LinkButton>
        </Link>
    );
}
