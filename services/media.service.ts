import e from "express";
import type { Media, Prisma } from "../generated/prisma";
import * as mediaRepository from "../repositories/media.reposotory";

export async function createMedias(medias: mediaRepository.MediaParams[]): Promise<Media[]>{
    try{
        const createdMedias = await mediaRepository.createMedias(medias);
        return createdMedias;
    }catch(err){
        throw new Error((err as Error).message);
    }
}

export async function getMedias(): Promise<Media[]>{
    try{
        const medias = await mediaRepository.getMedias();
        return medias;
    }catch(err){
        throw new Error((err as Error).message);
    }
}

export async function getMedia(id: string): Promise<Media>{
    try{
        const media = await mediaRepository.getMedia(id);
        return media;
    }catch(err){
        throw new Error((err as Error).message);
    }
}

export async function updateMedia(media: Media): Promise<Media>{
    try{
        const updatedMedia = await mediaRepository.updateMedia(media);
        return updatedMedia;
    }catch(err){
        throw new Error((err as Error).message);
    }
}

export async function deleteMedia(id: string): Promise<Media>{
    try{
        const deletedMedia = await mediaRepository.deleteMedia(id);
        return deletedMedia;
    }catch(err){
        throw new Error((err as Error).message);
    }
}

export async function deleteAllMedias(): Promise<Prisma.BatchPayload>{
    try{
        const deletedMedias = await mediaRepository.deleteAllMedias();
        return deletedMedias;
    }catch(err){
        throw new Error((err as Error).message);
    }
}
