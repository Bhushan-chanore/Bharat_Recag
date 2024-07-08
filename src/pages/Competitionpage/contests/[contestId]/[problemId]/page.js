import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'; // Import useParams from react-router-dom instead of useRouter from Next.js
import Playground from '../../../Playground'; // Adjust the path as per your project structure

const Page = () => {
  const { contestId } = useParams(); // Use useParams to get dynamic route parameters

  // State to hold the problem data
  const [problem, setProblem] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  // Simulate fetching data based on contestId (for demonstration purposes)
  useEffect(() => {
    // Replace this with actual API call logic
    const fetchProblemData = async () => {
      try {
        // Simulated fetched problem data based on contestId
        const fetchedProblem = {
          id: 'two-sum',
          title: `Weekly Contest ${contestId}`,
          problemStatement:
            "Given an array of integers <code>nums</code> and an integer <code>target</code>, return <em>indices of the two numbers such that they add up to</em> <code>target</code>.<p class='mt-3'>You may assume that each input would have <strong>exactly one solution</strong>, and you may not use thesame element twice.<p class='mt-3'>You can return the answer in any order.</p>",
          inputFormat:
            "<li>First line will contain T, number of testcases. Then the testcases follow</li><li>The first line in each testcase contains an array of integers <code>nums</code> seperated by space</li><li>The next line contains one integer <code>target</code></li>",
          outputFormat: "<li>One line with array of two integers</li>",
          sampleOutput: '0 1<br/>1 2<br/>0 1',
          sampleInput:
            '3<br/>2 7 11 15<br/>9<br/>3 2 4<br/>6<br/>3 3<br/>6',
          constraints:
            "<li class='mt-2'><code>2 ≤ nums.length ≤ 10</code></li> <li class='mt-2'><code>-10 ≤ nums[i] ≤ 10</code></li> <li class='mt-2'><code>-10 ≤ target ≤ 10</code></li><li class='mt-2 text-sm'><strong>Only one valid answer exists.</strong></li>",
          difficulty: 'Easy',
          category: 'Array',
          order: contestId,
          videoId: '8-k1C6ehKuw',
          starterCode:
            "import sys\nimport ast\n\ndef two_sum(nums, target):\n  ''' Write Your Code '''\n\n\nif __name__ == \"__main__\":\n  if len(sys.argv) > 1:\n    # Parse command-line arguments as lists\n    arg_lists = [ast.literal_eval(arg) for arg in sys.argv[1:]]\n        \n    for arg_list in arg_lists:\n      nums, target = arg_list\n      nums = [int(num) for num in nums]  # Convert string representation of numbers to integers\n      result = two_sum(nums, target)\n      print(result)\n  else:\n    nums = [2, 7, 11, 15]\n    target = 9\n    result = two_sum(nums, target)\n    print(result)\n\n\n",
          value:
            "import sys\nimport ast\n\ndef two_sum(nums, target):\n  ''' Write Your Code '''\n\n\nif __name__ == \"__main__\":\n  if len(sys.argv) > 1:\n    # Parse command-line arguments as lists\n    arg_lists = [ast.literal_eval(arg) for arg in sys.argv[1:]]\n        \n    for arg_list in arg_lists:\n      nums, target = arg_list\n      nums = [int(num) for num in nums]  # Convert string representation of numbers to integers\n      result = two_sum(nums, target)\n      print(result)\n  else:\n    nums = [2, 7, 11, 15]\n    target = 9\n    result = two_sum(nums, target)\n    print(result)\n\n\n",
          testCase: {
            input: ['3\n2 7 11 15\n9\n3 2 4\n6\n3 3\n6'],
            output: ['0 1\n1 2\n0 1\n'],
          },
        };

        setProblem(fetchedProblem);
      } catch (error) {
        console.error('Error fetching problem:', error);
      }
    };

    if (contestId) {
      fetchProblemData();
    }
  }, [contestId]);

  const difficultyColors = {
    Hard: 'bg-red-500',
    Medium: 'bg-orange-500',
    Easy: 'bg-green-500',
  };

  if (!problem) {
    return <div>Loading...</div>;
  }

  return (
    <div className='w-full flex flex-col gap-10 mx-auto sm:p-[3rem] p-[0.5rem] bg-white '>
    <div>
        <Link to={`/competition/${contestId}`} className="font-semibold text-gray-400">
         ⯇ Back to Contests
        </Link>
      </div>
      <div className='flex items-start gap-5 max-md:flex-col max-md:items-center'>
        <div>
          <h1 className='font-semibold text-2xl py-2'>
            {problem?.order}. {problem?.title}
          </h1>

          <div className='py-2'>
            {/* For HTML content Rendering */}
            <div
              dangerouslySetInnerHTML={{ __html: problem?.problemStatement || '' }}
            />
          </div>

          <div className='mt-4'>
            <h2 className='font-bold'>Input Format</h2>
            <div
              dangerouslySetInnerHTML={{ __html: problem?.inputFormat || '' }}
            />
          </div>

          <div className='mt-4'>
            <h2 className='font-bold'>Output Format</h2>
            <div
              dangerouslySetInnerHTML={{ __html: problem?.outputFormat || '' }}
            />
          </div>

          <div className='mt-4'>
            <h2 className='font-bold'>Sample Input</h2>
            <div className='bg-light-3 font-mono mt-1 py-2 px-3 rounded-lg'>
              <div dangerouslySetInnerHTML={{ __html: problem?.sampleInput || '' }} />
            </div>
          </div>

          <div className='mt-4'>
            <h2 className='font-bold'>Sample Output</h2>
            <div className='bg-light-3 font-mono mt-1 py-2 px-3 rounded-lg'>
              <div dangerouslySetInnerHTML={{ __html: problem?.sampleOutput || '' }} />
            </div>
          </div>

          <div className='mt-2 py-2'>
            {problem?.constraints && (
              <>
                <p className='font-bold'>Constraints:</p>
                <div
                  className='font-medium'
                  dangerouslySetInnerHTML={{ __html: problem?.constraints || '' }}
                />
              </>
            )}
          </div>
        </div>

        <div className='w-[350px] bg-light-2 border-2 border-light-3 rounded-lg shadow-lg'>
          <div className='bg-light-3 rounded-t-lg py-2 px-4'>
            <h2 className='font-medium'>Submission Info</h2>
          </div>
          <div className='flex justify-between items-center border-t border-light-3 py-2 px-4'>
            <p className='font-medium'>User Accepted</p>
            <div>19509</div>
          </div>
          <div className='bg-light-2 flex justify-between items-center border-t border-light-3 py-2 px-4'>
            <p className='font-medium'>User Tried</p>
            <div>19509</div>
          </div>
          <div className='flex justify-between items-center border-t border-light-3 py-2 px-4'>
            <p className='font-medium'>Total Accepted</p>
            <div>19509</div>
          </div>
          <div className='bg-light-2 flex justify-between items-center border-t border-light-3 py-2.5 px-4'>
            <p className='font-medium'>Total Submissions</p>
            <div>19509</div>
          </div>
          <div className='flex justify-between items-center border-t border-light-3 py-2 px-4'>
            <p className='font-medium'>Difficulty</p>
            <div
              className={`px-4 py-1 rounded-full text-sm text-light-1 ${
                difficultyColors[problem?.difficulty]
              }`}
            >
              {problem?.difficulty}
            </div>
          </div>
        </div>
      </div>

      {/* Render Playground component passing problem and setSubmitted as props */}
      <Playground problem={problem} setSubmitted={setSubmitted} isForSubmission={true} />
    </div>
  );
};

export default Page;
