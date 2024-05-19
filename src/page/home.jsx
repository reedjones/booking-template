import React from 'react'
import Calendar from "../components/Calendar.jsx";
import { Footer } from "../layout/Footer.jsx";
import { Header } from "../layout/Header.jsx";


function HeroSections () {
  return <main className="flex-1">
    <section className="bg-gray-800 py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
              Schedule your home service appointments with ease
            </h1>
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              Our online booking system makes it simple to find and book appointments for your home services.
            </p>
            <div className="flex gap-4">
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2">
                Book Now
              </button>
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
                Learn More
              </button>
            </div>
          </div>
          <div>
            <img
              src="/service.jpg"
              alt="Appointment Scheduling"
              width="600"
              height="400"
              className="rounded-lg my-cool"

            />
          </div>
        </div>
      </div>
    </section>
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
              Book your appointment in just a few clicks
            </h2>
            <p className="text-gray-400 mb-8">
              Our intuitive calendar view makes it easy to find and select available appointment slots.
            </p>
            <div className="border rounded-lg shadow-sm overflow-hidden">
                <Calendar></Calendar>
            </div>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">Tell us about your service needs</h2>
            <p className="text-gray-400 mb-8">
              Fill out the form with your details and service requirements.
            </p>
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"

                  >
                    Name
                  </label>
                  <input
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    id="name"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"

                  >
                    Email
                  </label>
                  <input
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    id="email"
                    placeholder="Enter your email"
                    type="email"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"

                  >
                    Phone
                  </label>
                  <input
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    id="phone"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"

                  >
                    Service
                  </label>
                  <option value="">Select a service</option>
                  <option value="gardening">Gardening</option>
                  <option value="plumbing">Plumbing</option>
                  <option value="pool-cleaning">Pool Cleaning</option>
                  <select
                    aria-hidden="true"
                    tabIndex="-1"
                    className="my-cool-2"
                  >
                    <option value=""></option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Details
                  </label>
                  <textarea
                    className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    id="details"
                    placeholder="Enter any additional details"
                  ></textarea>
                </div>
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 w-full">
                  Book Appointment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="bg-gray-800 py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <img
              src="/service.jpg"
              alt="Manage Appointments"
              width="600"
              height="400"
              className="rounded-lg my-cool"

            />
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Manage your appointments with ease</h2>
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              View, reschedule, or cancel your appointments at any time.
            </p>
            <div className="flex gap-4">
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2">
                Manage Appointments
              </button>
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>;
}

const Home = () => {
    return (<>


  <HeroSections/>

        </>
        )
}

export default Home; 