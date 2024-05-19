/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/YUmA9jyrszP
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import { Button } from "../ui/button"
import { Calendar } from "../ui/calendar"
import { Label } from "../ui/label"
import { Input } from "../ui/input"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "../ui/select"
import { RadioGroupItem, RadioGroup } from "../ui/radio-group"

export function BookingCalender2() {
  return (
    (<div className="max-w-2xl mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Book an Appointment</h2>
        <div className="flex items-center space-x-2">
          <Button size="sm" variant="outline">
            <CalendarIcon className="w-4 h-4 mr-2" />
            Weekly
          </Button>
          <Button size="sm" variant="outline">
            <CalendarIcon className="w-4 h-4 mr-2" />
            Monthly
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Calendar
            className="[&_td]:w-12 [&_td]:h-12 [&_th]:w-12 [&_th]:h-12 [&>div]:space-x-0 [&>div]:gap-4"
            initialFocus
            mode="single" />
        </div>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <Label htmlFor="date">Date</Label>
              <Input id="date" readOnly value="April 15, 2024" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="time">Time</Label>
              <Select defaultValue="10:00 AM">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select time" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="9:00 AM">9:00 AM</SelectItem>
                  <SelectItem value="10:00 AM">10:00 AM</SelectItem>
                  <SelectItem value="11:00 AM">11:00 AM</SelectItem>
                  <SelectItem value="12:00 PM">12:00 PM</SelectItem>
                  <SelectItem value="1:00 PM">1:00 PM</SelectItem>
                  <SelectItem value="2:00 PM">2:00 PM</SelectItem>
                  <SelectItem value="3:00 PM">3:00 PM</SelectItem>
                  <SelectItem value="4:00 PM">4:00 PM</SelectItem>
                  <SelectItem value="5:00 PM">5:00 PM</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="space-y-1">
            <Label htmlFor="duration">Duration</Label>
            <Select defaultValue="1 hour">
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select duration" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="30 minutes">30 minutes</SelectItem>
                <SelectItem value="1 hour">1 hour</SelectItem>
                <SelectItem value="1.5 hours">1.5 hours</SelectItem>
                <SelectItem value="2 hours">2 hours</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-1">
            <Label htmlFor="recurring">Recurring</Label>
            <RadioGroup
              className="flex items-center space-x-4"
              defaultValue="none"
              id="recurring">
              <Label
                className="flex items-center space-x-2 cursor-pointer"
                htmlFor="recurring-none">
                <RadioGroupItem id="recurring-none" value="none" />
                <span>None</span>
              </Label>
              <Label
                className="flex items-center space-x-2 cursor-pointer"
                htmlFor="recurring-weekly">
                <RadioGroupItem id="recurring-weekly" value="weekly" />
                <span>Weekly</span>
              </Label>
              <Label
                className="flex items-center space-x-2 cursor-pointer"
                htmlFor="recurring-monthly">
                <RadioGroupItem id="recurring-monthly" value="monthly" />
                <span>Monthly</span>
              </Label>
            </RadioGroup>
          </div>
          <Button className="w-full" size="lg">
            Book Appointment
          </Button>
        </div>
      </div>
    </div>)
  );
}

function CalendarIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>)
  );
}