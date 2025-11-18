import React from 'react'

const CodeSnippet = () => {
  return (
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
  )
}

export default CodeSnippet