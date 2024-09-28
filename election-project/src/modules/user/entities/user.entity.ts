import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { UserRolesEntity } from '../../roles/entities/user-roles.entity';

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'name' })
  name: string;

  @OneToMany(() => UserRolesEntity, (userRoles) => userRoles.user)
  userRoles: UserRolesEntity[];
}
