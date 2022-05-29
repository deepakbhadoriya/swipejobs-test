import React from 'react'
import Link from 'next/link'
import { MailIcon, PhoneIcon } from '@heroicons/react/solid'
import type { WorkerProfile } from '../../types'

const imageUrl =
  'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80'
const coverImageUrl =
  'https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'

const profileContainer = ({ profile }: { profile: WorkerProfile }) => {
  return (
    <article className="rounded-sm bg-white pb-6">
      <div>
        <div>
          <img
            className="h-32 w-full rounded-t-sm object-cover lg:h-48"
            src={coverImageUrl}
            alt=""
          />
        </div>
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
            <div className="flex">
              <img
                className="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32"
                src={imageUrl}
                alt=""
              />
            </div>
            <div className="mt-6 sm:flex sm:min-w-0 sm:flex-1 sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
              <div className="mt-6 min-w-0 flex-1 sm:hidden 2xl:block">
                <h1 className="truncate text-2xl font-bold text-gray-900">
                  {`${profile.firstName} ${profile.lastName}`}
                </h1>
              </div>
              <div className="justify-stretch mt-6 flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
                <Link href={`mailto:${profile.email}`}>
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
                  >
                    <MailIcon
                      className="-ml-1 mr-2 h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                    <span>Email</span>
                  </button>
                </Link>
                <Link href={`tel:${profile.phoneNumber}`}>
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
                  >
                    <PhoneIcon
                      className="-ml-1 mr-2 h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                    <span>Call</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-6 hidden min-w-0 flex-1 sm:block 2xl:hidden">
            <h1 className="truncate text-2xl font-bold text-gray-900">
              {profile.firstName}
              {profile.lastName}
            </h1>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-6 max-w-5xl px-4 sm:px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
          <div className="sm:col-span-1">
            <dt className="text-lg font-extrabold text-[#32d5ad]">
              Max Job Distance
            </dt>
            <dd className="text-md mt-1 text-gray-900">
              {profile.maxJobDistance}
            </dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-lg font-extrabold text-[#32d5ad]">ID</dt>
            <dd className="mt-1 text-xl text-gray-900">
              {profile.workerId?.substring(0, 17)}
            </dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-lg font-extrabold text-[#32d5ad]">Phone</dt>
            <dd className="mt-1 text-xl text-gray-900">
              {profile.phoneNumber}
            </dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-lg font-extrabold text-[#32d5ad]">Email</dt>
            <dd className="mt-1 text-xl text-gray-900">{profile.email}</dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-lg font-extrabold text-[#32d5ad]">Address</dt>
            <dd className="mt-1 text-xl text-gray-900">
              {profile.address?.formattedAddress}
            </dd>
          </div>
        </dl>
      </div>
    </article>
  )
}

export default profileContainer
