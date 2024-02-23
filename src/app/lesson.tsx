// "use client";

import { useState } from "react";

type LessonProps = {
    title: string;
    shortSummary?: string;
};

type LikeState = 'unset' | 'Liked' | 'Disliked';

export function Lesson({ title, shortSummary}: LessonProps) {
    // const [likeState, setLikeState] = useState<LikeState>('unset');
    // const setLike = () => setLikeState('Liked');

    return (
        <details>
            <summary>
                <h2>{title}</h2>
            </summary>
            
            {/* <button type="button" onClick={setLike}>{likeState === 'unset' ? 'like' : likeState}</button> */}
            <p>{shortSummary}</p>
        </details>
    );
};
