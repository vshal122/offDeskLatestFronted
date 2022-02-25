import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  baseurl="http://localhost:8081"

  constructor(private http:HttpClient) { }

  getUserDetails()
  {

  return this.http.get(`${this.baseurl}/offdesk/user/all_employee`);

  }
  getUserbyEmail(gmail:string)
 {
     return this.http.get(`${this.baseurl}/offdesk/user/getuserbyemail/${gmail}`);
 }
 getLeaveRecordByEmail(gmail:string)
 {
  return this.http.get(`${this.baseurl}/offdesk/leave/getleaveuserbyemail/${gmail}`);
 }

 takeLeave(leavedetails:any)
 {
  return this.http.post(`${this.baseurl}/offdesk/leave/save`,leavedetails,{responseType:"text" as "json"});
 }

 getEmployeeWithWaitingState(gmail:string)
 {
  return this.http.get(`${this.baseurl}/offdesk/user/employee_by_managerid/${gmail}`,{responseType:"text" as "json"});
 }


 approveLeaveByManager(id:number)
 {
  return this.http.get(`${this.baseurl}/offdesk/user/giveApproveByManager/${id}`);
 }


 rejectLeaveByManager(id:number)
 {
  return this.http.get(`${this.baseurl}/offdesk/user/RejectByManager/${id}`);
 }

 checkLeaveRecordByEmail(gmail:string)
 {
  return this.http.get(`${this.baseurl}/offdesk/leave/findLeaveBalance/${gmail}`);
 }


 getAllEmployeeApproveOrReject(gmail:string)
 {
  return this.http.get(`${this.baseurl}/offdesk/user/GetAllEmployeeWithApprovedOrrejectByManager/${gmail}`);
 }


 getAllEmailManager()
 {
  return this.http.get(`${this.baseurl}/offdesk/user/getAllmanager`);
 }
  
 deleteUser(userId:number)
 {
  return this.http.delete(`${this.baseurl}/offdesk/user/delete/${userId}`);
 }

}
 