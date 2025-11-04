import { PrismaService } from '../prisma/prisma.service';
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: any): Promise<{
        name: string;
        username: string;
        password: string;
        role: string;
        id: number;
    }>;
    findByUsername(username: string): Promise<{
        name: string;
        username: string;
        password: string;
        role: string;
        id: number;
    } | null>;
    findAll(): Promise<{
        name: string;
        username: string;
        password: string;
        role: string;
        id: number;
    }[]>;
    findOne(id: number): Promise<{
        name: string;
        username: string;
        password: string;
        role: string;
        id: number;
    } | null>;
}
