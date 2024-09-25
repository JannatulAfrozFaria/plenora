import React from 'react';
import Title from '../utilityComponents/Title';

const BlogPosts = () => {
    return (
        <div>
            <Title subHeading={'Articles & Blogs'} heading={'Our Latest Blog Posts'}></Title>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

            </div>
        </div>
    );
};

export default BlogPosts;