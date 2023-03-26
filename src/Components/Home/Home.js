import React from "react";

export const Home = (...data) => {
  console.log(data)
  console.log(Array.isArray(data))
  return (
    <>
      <section className="container px-4 mx-auto py-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-medium text-gray-800 dark:text-white">
              Hospital
            </h2>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-300">
              This is a list of all Hospital. You can add new Hospital, edit
              or delete existing ones.
            </p>
          </div>
          <div>
            <button className="rounded-md bg-indigo-600 px-3.5 py-1.5 text-sm font-semibold leading-7 text-white hover:bg-indigo-500 ">
              Add
            </button>
          </div>
        </div>
        <div className="flex flex-col mt-6">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        <span>Title</span>
                      </th>
                      <th
                        scope="col"
                        className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Address
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Phone
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Task
                      </th>
                      <th scope="col" className="relative py-3.5 px-4">
                        <span className="sr-only">Delete</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                  {data.map((item,index) => (
                        <tr key={index} >
                        <td className="py-4 px-4 whitespace-nowrap">
                          <div className="flex items-center">
                            
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900 dark:text-white">
                                Gunam {item.name}
                              </div>
                              
                            </div>
                          </div>
                        </td>
                        <td className="px-12 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900 dark:text-white">
                            Hosur {item.address}
                          </div>
                          
                        </td>
                        <td className="px-2 py-4 whitespace-nowrap">
                          <span className="px-2 text-xs  font-semibold ">
                            987654321 
                          </span>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                          Full Body Checkup
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap text-right text-sm font-medium">
                            Edit
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap text-right text-sm font-medium">
                            Delete
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

