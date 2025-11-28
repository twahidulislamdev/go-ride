import { IoChatbubbleEllipsesOutline, IoPersonOutline } from "react-icons/io5";

const BlogCard = ({ post }) => {
  return (
    <div className="group relative h-full space-y-5 lg:space-y-0 ">
      {/* Image Container */}
      <div className="w-full h-[280px] lg:h-[320px] overflow-hidden rounded-3xl bg-gray-200">
        <img
          src={post.image}
          alt={post.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Overlapping Card */}
      <div className="absolute inset-x-0 -bottom-10  mx-auto w-[90%] h-40 ">
        <div className="relative bg-neutralColor shadow-2xl rounded-2xl px-3 py-5 text-center space-y-5 overflow-visible">
          {/* Date Badge - Half outside at the top */}
          <div className="absolute -top-5 left-1/2 -translate-x-1/2">
            <div className="px-6 py-2 bg-mainColor rounded-xl shadow-lg">
              <p className="text-sm lg:text-base font-semibold text-black whitespace-nowrap">
                {post.date}
              </p>
            </div>
          </div>

          {/* Add top padding to make space for the protruding badge */}
          <div className="pt-3">
            {/* Author + Comments */}
            <div className="flex items-center justify-center gap-6 text-sm lg:text-base">
              <div className="flex items-center gap-2 text-white">
                <IoPersonOutline className="text-mainColor text-lg" />
                <span>{post.person}</span>
              </div>

              <div className="flex items-center gap-2 text-white ">
                <IoChatbubbleEllipsesOutline className="text-mainColor text-lg" />
                <span>{post.commentsAmount} Comments</span>
              </div>
            </div>

            {/* Title */}
            <h3 className="text-base lg:text-xl font-semibold text-white line-clamp-2 pt-3">
              {post.title}
            </h3>
          </div>
        </div>
      </div>

      {/* Invisible spacer */}
      <div className="pb-20 lg:pb-24" />
    </div>
  );
};

export default BlogCard;