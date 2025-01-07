import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import toast from "react-hot-toast";
import { axiosIstance } from "../../.config/axiosInstance";

export const AddMovieForm = ({ movie }) => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async(data)=>{
        try {
            console.log(data,'====data');
            const formData = new FormData();
            formData.append("title",data.title)
            formData.append("description",data.description)
            formData.append("duration",data.duration)
            formData.append("image",data.image[0])



            const response = await axiosIstance({
                url: "/movie/add-movie",
                method:"POST",
                data:formData
            })
            
            toast.success("movie added succesfully")
            
        } catch (error) {
            console.log(error);
            toast.error("error while adding movie")
            
        }
    }

    {/*const onSubmit = async (data) => {
        try {
            console.log(data, "=====data");
            const formData = new FormData();
            formData.append("title", data.title);
            formData.append("description", data.description);
            formData.append("duration", data.duration);
            formData.append("image", data.image[0]);

            const response = await axiosInstance({
                url: "/movies/add-movie",
                method: "POST",
                data: formData,
            });
            toast.success("course created successfully");
        } catch (error) {
            console.log(error);
            toast.error("Error while creating course");
        }
    };
    */}

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="card-body grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* title */}
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Movie Title</span>
                </label>
                <input
                    type="text"
                    placeholder="Enter Movie Title"
                    className={`input input-bordered text-sm ${errors.title ? "input-error" : ""}`}
                    {...register("title", {
                        required: "Title is required",
                    })}
                />
                {errors.title && <span className="text-red-500 text-sm mt-1">{errors.title.message}</span>}
            </div>

            {/* image */}
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Upload Image</span>
                </label>
                <input
                    type="file"
                    className={`input text-sm ${errors.image ? "input-error" : ""}`}
                    {...register("image", { required: "Image is required" })}
                />
                {errors.image && <span className="text-red-500 text-sm mt-1">{errors.image.message}</span>}
            </div>

            

            {/* duration */}
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Duration</span>
                </label>
                <input
                    type="text"
                    placeholder="Enter Duration"
                    className={`input input-bordered text-sm ${errors.duration ? "input-error" : ""}`}
                    {...register("duration", {
                        required: "Duration is required",
                    })}
                />
                {errors.duration && <span className="text-red-500 text-sm mt-1">{errors.duration.message}</span>}
            </div>

            

            {/* description */}
            <><div className="form-control">
        <label className="label">
            <span className="label-text">Description</span>
        </label>
        <textarea
            placeholder="Description"
            className={`input input-bordered text-sm ${errors.description ? "input-error" : ""}`}
            {...register("description", {
                required: "Description is required",
            })} />
        {errors.description && <span className="text-red-500 text-sm mt-1">{errors.description.message}</span>}
    </div><div className="form-control  mt-6">
            <button type="submit" className="btn primary-bg text-white font-semibold w-full md:w-1/2">
                {loading ? <span className="loading loading-dots loading-lg"></span> : "Add Movie"}
            </button>
        </div></>
        </form>
    );
};