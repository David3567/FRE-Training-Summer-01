import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidatorFn, ValidationErrors} from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.services';
import { User } from 'src/app/shared/interfaces/user.interface';
import { Router } from '@angular/router';

@Component({
    selector: 'app-upgrade-role',
    templateUrl: './upgrade-role.component.html',
    styleUrls: ['./upgrade-role.component.scss']
  })
  export class UpgradeRoleComponent implements OnInit {
  
    constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

    public roles:string[] = ["USER", "SUPERUSER", "ADMIN"];

    validRole(): boolean{
      return this.roles.includes(this.roleForm.value.role);
    }
  
    roleForm!: FormGroup;
    ngOnInit(): void {
      this.roleForm = this.fb.group({
        password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]],
        role: ['', Validators.required],
      })
    }
    get password() {
      return this.roleForm.get('password');
    }
    get role() {
      return this.roleForm.get('role');
    }
    updateRole(): void{
      this.authService.upgradeRole(this.roleForm.value.role, this.roleForm.value.password).subscribe(
        () => { console.log("Role Updated to " + this.roleForm.value.role);
      });
    }
    }
  