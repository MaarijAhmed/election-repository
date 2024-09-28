import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { UserEntity } from '../../user/entities/user.entity';
import { RoleEntity } from './role.entity';

@Entity('user_roles')
export class UserRolesEntity {
  @ManyToOne(() => UserEntity, (user) => user.userRoles)
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;

  @ManyToOne(() => RoleEntity, (role) => role.userRoles)
  @JoinColumn({ name: 'role_id' })
  role: RoleEntity;

  @Column({ name: 'user_id' })
  userId: number;
  @Column({ name: 'role_id' })
  roleId: number;
}
