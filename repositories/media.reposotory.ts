import type { Media, MediaType, Prisma } from "../generated/prisma";
import prisma from "../utils/prisma";

export async function createMedias(medias: MediaParams[]): Promise<Media[]>{
    try{
        const newMedias = await Promise.all(medias.map((media)=>{
            return prisma.media.create({
                data: media
            })
        }))
        return newMedias
        
    }catch(err){
        throw new Error((err as Error).message);
    }
}

export async function getMedias(): Promise<Media[]>{
    try{
        const medias = await prisma.media.findMany();
        return medias;
    }catch(err){
        throw new Error((err as Error).message);
    }
}

export async function getMedia(id: string): Promise<Media>{
    try{
        const media = await prisma.media.findFirst({
            where: {
                id
            }
        })
        if(media){
            return media;
        }else{
            throw new Error("Media not found");
        }
    }catch(err){
        throw new Error((err as Error).message);
    }
}

export async function updateMedia(media: Media): Promise<Media>{
    try{
        const updatedMedia = await prisma.media.update({
            where: {
                id: media.id
            },
            data: media
        })
        return updatedMedia;
    }catch(err){
        throw new Error((err as Error).message);
    }
}

export async function deleteMedia(id: string): Promise<Media>{
    try{
        const deletedMedia = await prisma.media.delete({
            where: {
                id
            }
        })
        return deletedMedia;
    }catch(err){
        throw new Error((err as Error).message);
    }
}

export async function deleteAllMedias(): Promise<Prisma.BatchPayload>{
    try{
        const deletedMedias = await prisma.media.deleteMany();
        return deletedMedias;
    }catch(err){
        throw new Error((err as Error).message);
    }
}

export interface MediaParams {
    type: MediaType,
    src: string,
    alt: string
}