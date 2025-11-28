import { IoChatbubbleEllipsesOutline, IoPersonOutline } from "react-icons/io5";

const BlogCard = ({ post }) => {
  return (
    <div className="w-full relative">
      {/* IMAGE */}
      <div className="w-full h-[300px] lg:h-[350px] overflow-hidden rounded-3xl">
        <img
          src={post.image}
          alt={post.name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 -bottom-10 lg:-bottom-10 bg-neutralColor w-[90%] shadow-lg rounded-xl p-5 flex flex-col items-center gap-3">
        {/* Date part start */}
        <div className="flex justify-center px-5 py-2 bg-mainColor rounded-xl -mt-8">
          <p className="text-sm lg:text-base font-medium text-black">
            {post.date}
          </p>
        </div>
        {/* Date part end */}

        <div className="flex gap-4 mt-2">
          {/* person part start */}
          <div className="flex items-center gap-1 text-white">
            <IoPersonOutline className="text-mainColor text-xl" />
            <span className="text-white">{post.person}</span>
          </div>
          {/* person part end */}

          {/* Comments part start   */}
          <div className="flex items-center gap-1">
            <IoChatbubbleEllipsesOutline className="text-mainColor text-xl" />
            <span className="text-white">{post.commentsAmount} Comments</span>
          </div>
          {/* Comments part end   */}
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
