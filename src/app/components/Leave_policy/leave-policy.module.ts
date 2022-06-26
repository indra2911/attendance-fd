import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LeaveComponent } from "./leave/leave.component";
import { HolidayCalanderComponent } from "./holiday-calander/holiday-calander.component";
import { LeaveBalanceComponent } from "./leave-balance/leave-balance.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: "leave", component: LeaveComponent },
  { path: "leaveBalance", component: LeaveBalanceComponent },
  { path: "holidayCalander", component: HolidayCalanderComponent },
];

@NgModule({
  declarations: [
    LeaveComponent,
    HolidayCalanderComponent,
    LeaveBalanceComponent,
  ],
  imports: [CommonModule, NgbModule, RouterModule.forChild(routes)],
})
export class LeavePolicyModule {}
