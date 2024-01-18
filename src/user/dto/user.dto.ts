import { IsNotEmpty, IsString } from "class-validator";

export class userDto{

    @IsNotEmpty()
    id: number;

    @IsString()
    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    comments: number;

    @IsNotEmpty()
    likes: number;

    @IsString()
    @IsNotEmpty()
    author: string;

    @IsNotEmpty()
    createdAt: Date;
}