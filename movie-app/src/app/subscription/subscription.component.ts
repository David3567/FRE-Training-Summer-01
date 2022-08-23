import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../interfaces/user.interface';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit {
  currentUser!: User;
  hasSelected: boolean = false;
  @Input() userRole: "USER" | "ADMIN" | "SUPERUSER" | "GUEST"= "GUEST";
  @Output()userRoleChange= new EventEmitter();

  selectedMembership!: string;
  selectRole!: string;

  features: string[] = [
    'Monthly price after free ends on 01/01/2024',
    "Screens you can watch on the same time",
    "HD Available",
    "Ultra HD available",
    "High dynamic range (HDR) available",
    "Watch on your laptop, TV, phone and tablet",
    "Unlimited movies and TV shows",
    "Cancel anytime",
    "First month free"
  ];

  subscriptions: Membership[] = [
    {
      price: 7.99,
      name: 'Basic', //user
      screenToWatchTotalCount: 1
    },
    {
      price: 10.99,
      name: 'Standard', //user
      screenToWatchTotalCount: 2
    },
    {
      price: 13.99,
      name: 'Premium', //admin
      screenToWatchTotalCount: 4
    },
    {
      price: 19.99,
      name: 'Ultra', //superuser
      screenToWatchTotalCount: 4
    },
  ]
  constructor(
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.userService.currentUser$.subscribe((user) => {
      this.currentUser = user;
    })
  }

  onConfirm() {
    this.userRoleChange.emit(this.currentUser.role)
  }

  onRoleUpdate(role: string) {
    this.selectedMembership = role;
    this.hasSelected = true;

    switch (role) {
      case "Basic":
        this.selectRole = "GUEST"
        break;

      case "Standard":
        this.selectRole = "USER"
        break;

      case "Premium":
        this.selectRole = "ADMIN"
        break;
      case "Ultra":
        this.selectRole ="SUPERUSER"
        break;
    }

    this.userService.onUpdateRole({
      username: this.currentUser.username!,
      password: "123Abc",
      email: this.currentUser.email!,
      role: this.selectRole,
      tmdb_key: "7979b0e432796fe7fa957d6fbbeb0835"
    }).subscribe(console.log)
  }

  hideModal() {
    this.hasSelected = false;
  }

}


interface Membership extends MembershipFeatures{
  price: number
  name: string
  screenToWatchTotalCount: number
}

type MembershipFeatures =
  Partial<
  Record<
    "isHD" | "isUltaHD" | "isHDR"
    | "allDevicesAllowed" | "isUnlimitedWatch"
    | "canCancelAnytime" | "isFirstMonthFree", boolean
  >
>
