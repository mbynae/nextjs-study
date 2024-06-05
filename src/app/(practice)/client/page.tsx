'use client';

import LinkButton from '@/components/common/button/LinkButton';
import Link from 'next/link';

export default function Page() {
    return (
        <Link href="/client/client2" passHref legacyBehavior>
            {/* <LinkButton /> */}
        </Link>
    );
}
