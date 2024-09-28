import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { UserRolesEntity } from './user-roles.entity';

@Entity('roles')
export class RoleEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'created_by' })
  createdBy: number;

  @Column({ name: 'role_name' })
  roleName: string;

  @OneToMany(() => UserRolesEntity, (userRoles) => userRoles.role)
  userRoles: UserRolesEntity[];
}
