'use client'

import { NextImageTurntable } from 'next-360-image-viewer';

export const ImageViewer = ({ images }: { images: string[] }) => {
    return (
        <div className='w-1/2 overflow-hidden mx-auto'>
            <NextImageTurntable 
                images={images}
                initialImageIndex={0}
                movementSensitivity={32}
            />
        </div>
    )
}