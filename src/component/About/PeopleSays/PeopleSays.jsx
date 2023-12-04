import React from 'react';
import CommentCard from '../CommentCard/CommentCard';
import CommonTitle from '../../Common/CommonTitle/CommonTitle';

const PeopleSays = () => {
    const arr = [1, 2, 3, 4, 5, 6];

    return (
        <div className='py-28'>
            {/* title */}
            <CommonTitle
                title="WHAT USER SAYS ABOUT US"
                para="Cum doctus civibus efficiantur in imperdiet deterruisset."
            ></CommonTitle>

            {/* peoples comment */}
            <div className='w-full grid grid-cols-1 md:mx-10 md:grid-cols-3 gap-4 py-20'>
                {
                    arr.map((a, index) => <CommentCard
                        key={index}
                        a={a}
                    ></CommentCard>
                    )
                }

            </div>

        </div>
    );
};

export default PeopleSays;