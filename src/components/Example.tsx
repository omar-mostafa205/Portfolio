export default function Example() {
    return (
      <div className=" py-24 sm:py-32">
        <div className="mx-auto max-w-8xl px-6 lg:max-w-8xl lg:px-8">
          <h2 className="text-center text-base/7 font-semibold text-[#b29be1]">Build Full Stack</h2>
          <p className="mx-auto mt-2 max-w-3xl text-center text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">
            Complete toolkit for modern Apps
          </p>
          <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
            <div className="relative lg:row-span-2">
              <div className="absolute inset-px rounded-lg bg-gray-900 lg:rounded-l-4xl" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                  <p className="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center">
                    Responsive Design
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-300 max-lg:text-center">
                    Build beautiful interfaces that work seamlessly across all devices with modern CSS frameworks and responsive layouts.
                  </p>
                </div>
                <div className="@container relative min-h-120 w-full grow max-lg:mx-auto max-lg:max-w-sm">
                  <div className="absolute inset-x-10 top-10 bottom-0 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-800 bg-gray-950 shadow-2xl">
                    <img
                      alt=""
                      src="mobile.png"
                      className="size-full object-cover object-top"
                    />
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/10 lg:rounded-l-4xl" />
            </div>
            <div className="relative max-lg:row-start-1">
              <div className="absolute inset-px rounded-lg bg-gray-900 max-lg:rounded-t-4xl" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                  <p className="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center">Performance</p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-300 max-lg:text-center">
                    Scalable server-side solutions with Node.js, Express, and modern database systems for optimal performance.
                  </p>
                </div>
                <div className="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2">
                  <img
                    alt=""
                    src="https://tailwindcss.com/plus-assets/img/component-images/bento-03-performance.png"
                    className="w-full max-lg:max-w-xs"
                  />
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/10 max-lg:rounded-t-4xl" />
            </div>
            <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
              <div className="absolute inset-px rounded-lg bg-gray-900" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                  <p className="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center">Authentication & Security</p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-300 max-lg:text-center">
                    Implement robust authentication with JWT, bcrypt, and Redis for secure user sessions and data protection.
                  </p>
                </div>
                <div className="@container flex flex-1 items-center max-lg:py-6 lg:pb-2">
                  <img
                    alt=""
                    src="xy.png"
                    className="h-[min(152px,40cqw)] object-cover"
                  />
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/10" />
            </div>
            <div className="relative lg:row-span-2">
              <div className="absolute inset-px rounded-lg bg-gray-900 max-lg:rounded-b-4xl lg:rounded-r-4xl" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                  <p className="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center">
                    RESTful & GraphQL APIs
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-300 max-lg:text-center">
                    Design and build powerful APIs with Express, middleware, and database integration for seamless data flow.
                  </p>
                </div>
                <div className="relative min-h-120 w-full grow">
                  <div className="absolute top-10 right-0 bottom-0 left-10 overflow-hidden rounded-tl-xl bg-gray-800 shadow-2xl outline outline-white/10">
                    <div className="flex bg-gray-800 outline outline-white/5">
                      <div className="-mb-px flex text-sm/6 font-medium text-gray-400">
                        <div className="border-r border-b border-r-white/10 border-b-white/20 bg-white/5 px-4 py-2 text-white">
                          authController.js
                        </div>
                        <div className="border-r border-gray-600/10 px-4 py-2">server.js</div>
                      </div>
                    </div>
                    <div className="bg-gray-800 p-6">
          <p className="font-mono text-sm mb-2">
            <span className="text-gray-200">@Post(</span>
            <span className="text-green-600">'login'</span>
            <span className="text-gray-600">)</span>
          </p>
          
          <p className="font-mono text-sm mb-2">
            <span className="text-purple-600">async</span>
            {' '}
            <span className="text-blue-600">login</span>
            <span className="text-gray-200">(</span>
            <span className="text-gray-200">@Body()</span>
            {' '}
            <span className="text-orange-600">loginDto</span>
            <span className="text-gray-600">:</span>
            {' '}
            <span className="text-yellow-600">LoginDto</span>
            <span className="text-gray-200">) {'{'}</span>
          </p>
          
          <p className="font-mono text-sm mb-2 ml-6">
            <span className="text-purple-600">const</span>
            {' '}
            <span className="text-blue-500">user</span>
            {' '}
            <span className="text-purple-600">=</span>
            {' '}
            <span className="text-purple-600">await</span>
            {' '}
            <span className="text-blue-500">this</span>
            <span className="text-gray-200">.</span>
            <span className="text-blue-500">authService</span>
            <span className="text-gray-200">.</span>
            <span className="text-blue-600">validateUser</span>
            <span className="text-gray-200">(loginDto);</span>
          </p>
          
          <p className="font-mono text-sm bg-gray-800">
            <span className="text-gray-200 bg-gray-800 ">{'}'}</span>
          </p>
        </div>
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/10 max-lg:rounded-b-4xl lg:rounded-r-4xl" />
            </div>
          </div>
        </div>
      </div>
    )
  }