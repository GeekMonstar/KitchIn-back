import e from "express";
import type { Prisma, Step } from "../generated/prisma";
import * as stepRepository from "../repositories/step.repository";

export async function createSteps(steps: stepRepository.StepParams[]): Promise<Step[]> {
    try {
        const newSteps = await stepRepository.createSteps(steps);
        return newSteps
    } catch (err) {
        throw new Error((err as Error).message);
    }
}

export async function getSteps(): Promise<Step[]> {
    try {
        const steps = await stepRepository.getSteps();
        return steps;
    } catch (err) {
        throw new Error((err as Error).message);
    }
}

export async function getStep(id: string): Promise<Step> {
    try {
        const step = await stepRepository.getStep(id);
        return step;
    } catch (err) {
        throw new Error((err as Error).message);
    }
}

export async function updateStep(step: Step): Promise<Step> {
    try {
        const updatedStep = await stepRepository.updateStep(step);
        return updatedStep;
    } catch (err) {
        throw new Error((err as Error).message);
    }
}

export async function deleteStep(id: string): Promise<Step> {
    try {
        const deletedStep = await stepRepository.deleteStep(id);
        return deletedStep;
    } catch (err) {
        throw new Error((err as Error).message);
    }
}

export async function deleteAllSteps(): Promise<Prisma.BatchPayload> {
    try {
        const deletedSteps = await stepRepository.deleteAllSteps();
        return deletedSteps;
    } catch (err) {
        throw new Error((err as Error).message);
    }
}