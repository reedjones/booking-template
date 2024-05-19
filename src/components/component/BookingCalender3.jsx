/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/fHq4p7OFzAE
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
import { PopoverTrigger, PopoverContent, Popover } from "../ui/popover"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "../ui/select"
import { RadioGroupItem, RadioGroup } from "../ui/radio-group"

export function BookingCalender3() {
  return (
    (<div className="max-w-4xl mx-auto p-4 sm:p-6 md:p-8">
      <div className="grid gap-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Book an Appointment</h1>
          <div className="flex items-center gap-2">
            <Button size="sm" variant="outline">
              <CalendarIcon className="w-4 h-4" />
              Today
            </Button>
            <Button size="sm" variant="outline">
              <ChevronLeftIcon className="w-4 h-4" />
            </Button>
            <Button size="sm" variant="outline">
              <ChevronRightIcon className="w-4 h-4" />
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Calendar
              className="rounded-lg border border-gray-200 p-4 dark:border-gray-800"
              mode="single" />
          </div>
          <div className="space-y-4">
            <div>
              <Label htmlFor="date">Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button className="w-full justify-start" variant="outline">
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    <span />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="p-0">
                  <Calendar mode="single" />
                </PopoverContent>
              </Popover>
            </div>
            <div>
              <Label htmlFor="time">Time</Label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a time" />
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
            <div>
              <Label htmlFor="recurring">Recurring</Label>
              <RadioGroup defaultValue="none">
                <div className="flex items-center gap-4">
                  <Label
                    className="flex items-center gap-2 cursor-pointer"
                    htmlFor="recurring-none">
                    <RadioGroupItem id="recurring-none" value="none" />
                    None
                  </Label>
                  <Label
                    className="flex items-center gap-2 cursor-pointer"
                    htmlFor="recurring-daily">
                    <RadioGroupItem id="recurring-daily" value="daily" />
                    Daily
                  </Label>
                  <Label
                    className="flex items-center gap-2 cursor-pointer"
                    htmlFor="recurring-weekly">
                    <RadioGroupItem id="recurring-weekly" value="weekly" />
                    Weekly
                  </Label>
                  <Label
                    className="flex items-center gap-2 cursor-pointer"
                    htmlFor="recurring-monthly">
                    <RadioGroupItem id="recurring-monthly" value="monthly" />
                    Monthly
                  </Label>
                </div>
              </RadioGroup>
            </div>
            <Button className="w-full" size="lg">
              Book Appointment
            </Button>
          </div>
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


function ChevronLeftIcon(props) {
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
      <path d="m15 18-6-6 6-6" />
    </svg>)
  );
}


function ChevronRightIcon(props) {
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
      <path d="m9 18 6-6-6-6" />
    </svg>)
  );
}
