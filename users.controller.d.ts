import { UsersService } from './users.service';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    create(body: any): Promise<{
        name: string;
        username: string;
        password: string;
        role: string;
        id: number;
    }>;
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
