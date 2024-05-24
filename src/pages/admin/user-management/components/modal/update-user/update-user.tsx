import { DatePicker, Input, Select } from 'antd'
import React, { forwardRef } from 'react'

type Props = {}

export const UpdateUser = forwardRef (function UpdateUser({}: Props,updateUserRef:any) {
  return (
    <div className="mb-10">
    <div className="flex justify-center gap-8 mt-5">
      <div className="w-[100%]">
        <label htmlFor="">Email</label>
        <Input allowClear />
      </div>
    </div>

    <div className="mt-5 flex gap-8">
      <div className="w-[50%]">
        <label className="text-left" htmlFor="">
          Phone
        </label>
        <Input allowClear />
      </div>
      <div className="w-[50%]">
        <label className="text-left" htmlFor="">
          Birthday
        </label>
        <DatePicker
            placeholder="Select your birth day"
            format={"DD/MM/YYYY"}
            allowClear
            className="block"
            name='birthday'
          />
      </div>
    </div>

    <div className="mt-5 w-[100%]">
      <label htmlFor="">Name</label>
      <Input allowClear />
    </div>

    <div className="mt-5 flex gap-8">
      <div className="w-[50%]">
        <label className="text-left" htmlFor="">
          Gender
        </label>
        
            <Select
            className="block"
            placeholder='Select your gender'
            allowClear
            options={[
              {
                value: true,
                label: "Nam",
              },
              {
                value: false,
                label: "Nữ",
              },
            ]}
          />
      </div>
      <div className="w-[50%]">
        <label className="text-left" htmlFor="">
          Role
        </label>
        <Select
            className="block"
            placeholder='Select your gender'
            allowClear
            options={[
              {
                value: 'USER',
                label: "USER",
              },
              {
                value: 'ADMIN',
                label: "ADMIN",
              },
            ]}
          />
      </div>
    </div>
  </div>
  )
})