import Button from "./Button";
import Card from "./Card";
import Input from "./Input";
import Select from "./Select";

function Review() {
  return (
    <main className="w-full space-y-8">
      <div className="flex flex-wrap gap-2 items-center justify-between">
        <p className="font-light text-sm">
          {" "}
          1 <span className="text-lg"> Review</span>{" "}
          {[...Array(5)].map((_, i) => (
            <span key={i} className="pi pi-star ml-1 text-amber-500"></span>
          ))}{" "}
          (5 out of 5){" "}
        </p>
        <Button >Leave a Review</Button>
      </div>

      <div className="flex  gap-2 mt-4 font-light">
        <div className="flex items-center justify-center rounded-full h-16 w-16 bg-gray-300 ">
          <span className="pi pi-user"></span>
        </div>
        <div>
          <p className=" text-sm">
            {" "}
            John Doe{" "}
            {[...Array(5)].map((_, i) => (
              <span key={i} className="pi pi-star ml-1 text-amber-500"></span>
            ))}
          </p>
          <p className=" text-xs"> 4 weeks ago</p>
          <p className=" text-sm"> "Great product, highly recommend!"</p>
        </div>{" "}
      </div>

      <Card className="w-full space-y-3 ">
        <p className="text-lg font-medium">Leave a Review</p>
        <hr className="text-gray-400" />
        <form action=" " className="space-y-4 ">
          <Input placeholder="you@example.com" labelUp="Email" />
          <div className="grid grid-cols-2 gap-2">
            <Input placeholder="Enter a title" labelUp="Title" />
            <Select
              label="Rating"
              placeholder="Select"
              options={[
                "1 - Poor",
                "2 - Fair",
                "3 - Good",
                "4 - Very Good",
                "5 - Excellent",
              ]}
            />
          </div>
          <textarea
            placeholder="Write a review"
            className=" h-26 w-full border outline-none border-gray-300 p-2 rounded-md"
          />

          <Button>Submit Review</Button>
        </form>
      </Card>
    </main>
  );
}

export default Review;
