import AddPost from "@/components/board/AddPost";
import React, { FormEvent } from "react";

const AddPostPage = () => {
    return(<AddPost write={function (e: FormEvent<Element>, formData: any): void {
        throw new Error("Function not implemented.");
    } }/>)
};

export default AddPostPage