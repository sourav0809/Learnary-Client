import { useState } from "react";
import { Book, BookOpen, Check, Clock, ExternalLink, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/common/UI/accordion";
import { Card, CardContent } from "@/components/common/UI/card";
import { Badge } from "@/components/common/UI/badge";
import { Button } from "@/components/common/UI/button";
import { Separator } from "@/components/common/UI/separator";
import { Progress } from "@/components/common/UI/progress";

const Roadmap = () => {
  const [learningPath, setLearningPath] = useState([
    {
      day: 1,
      topic: "Introduction to React",
      description:
        "Understanding React's purpose, history, and core features. Learn about the component-based architecture.",
      resource: {
        title: "React Official Website - Getting Started",
        url: "https://reactjs.org/docs/getting-started.html",
      },
      estimatedHours: 2,
      difficulty: "Easy",
      isCompleted: true,
    },
    {
      day: 2,
      topic: "Setting up a Development Environment",
      description:
        "Installing Node.js, npm/yarn, and creating a new React application using Create React App.",
      resource: {
        title: "Create React App Documentation",
        url: "https://create-react-app.dev/docs/getting-started/",
      },
      estimatedHours: 2,
      difficulty: "Easy",
      isCompleted: true,
    },
    {
      day: 3,
      topic: "JSX Basics",
      description:
        "Understanding JSX syntax, embedding expressions, and rendering elements.",
      resource: {
        title: "React - JSX: Introduction",
        url: "https://reactjs.org/docs/introducing-jsx.html",
      },
      estimatedHours: 2,
      difficulty: "Easy",
      isCompleted: false,
    },
    {
      day: 4,
      topic: "Components - Functional Components",
      description:
        "Learning about functional components, props, and rendering dynamic data.",
      resource: {
        title: "React - Components and Props",
        url: "https://reactjs.org/docs/components-and-props.html",
      },
      estimatedHours: 3,
      difficulty: "Easy",
      isCompleted: false,
    },
    {
      day: 5,
      topic: "Components - Class Components",
      description:
        "Understanding class components, state, and the component lifecycle.",
      resource: {
        title: "React - State and Lifecycle",
        url: "https://reactjs.org/docs/state-and-lifecycle.html",
      },
      estimatedHours: 3,
      difficulty: "Easy",
      isCompleted: false,
    },
    {
      day: 6,
      topic: "State Management",
      description:
        "Learning how to manage component state using the useState hook (functional components) and this.setState (class components).",
      resource: {
        title: "React - Using the State Hook",
        url: "https://reactjs.org/docs/hooks-state.html",
      },
      estimatedHours: 3,
      difficulty: "Medium",
      isCompleted: false,
    },
    {
      day: 7,
      topic: "Handling Events",
      description:
        "Understanding event handling in React, binding event handlers, and passing data.",
      resource: {
        title: "React - Handling Events",
        url: "https://reactjs.org/docs/handling-events.html",
      },
      estimatedHours: 3,
      difficulty: "Medium",
      isCompleted: false,
    },
    {
      day: 8,
      topic: "Conditional Rendering",
      description:
        "Learn how to render different content based on conditions using if/else statements, ternary operators, and short-circuit evaluation.",
      resource: {
        title: "React - Conditional Rendering",
        url: "https://reactjs.org/docs/conditional-rendering.html",
      },
      estimatedHours: 2,
      difficulty: "Medium",
      isCompleted: false,
    },
    {
      day: 9,
      topic: "Lists and Keys",
      description:
        "Rendering lists of data dynamically, understanding the importance of keys, and avoiding common pitfalls.",
      resource: {
        title: "React - Lists and Keys",
        url: "https://reactjs.org/docs/lists-and-keys.html",
      },
      estimatedHours: 2,
      difficulty: "Medium",
      isCompleted: false,
    },
    {
      day: 10,
      topic: "Forms",
      description:
        "Controlled vs. Uncontrolled components, handling form submissions, and validating user input.",
      resource: {
        title: "React - Forms",
        url: "https://reactjs.org/docs/forms.html",
      },
      estimatedHours: 3,
      difficulty: "Medium",
      isCompleted: false,
    },
    {
      day: 15,
      topic: "React Hooks - useEffect",
      description:
        "Understanding the useEffect hook for performing side effects in functional components.",
      resource: {
        title: "React - Using the Effect Hook",
        url: "https://reactjs.org/docs/hooks-effect.html",
      },
      estimatedHours: 3,
      difficulty: "Medium",
      isCompleted: false,
    },
    {
      day: 16,
      topic: "React Hooks - useContext",
      description:
        "Understanding the useContext hook for accessing context values in functional components.",
      resource: {
        title: "React - Using the Context Hook",
        url: "https://reactjs.org/docs/hooks-context.html",
      },
      estimatedHours: 3,
      difficulty: "Medium",
      isCompleted: false,
    },
  ]);

  const handleTopicCompletion = (index: number) => {
    const updatedPath = [...learningPath];
    updatedPath[index].isCompleted = !updatedPath[index].isCompleted;
    setLearningPath(updatedPath);
  };

  // Calculate progress
  const completedTopics = learningPath.filter(
    (topic) => topic.isCompleted
  ).length;
  const progressPercentage = (completedTopics / learningPath.length) * 100;

  // Find the current position (first incomplete topic)
  const currentPosition = learningPath.findIndex((topic) => !topic.isCompleted);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white w-[70%] px-5">
      <div className="w-full py-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
            Your React Learning Journey
          </h1>
          <p className="text-gray-600 mt-3 text-xl">
            Master React step-by-step with this personalized path
          </p>

          <div className="flex flex-wrap justify-center items-center mt-6 gap-4">
            <div className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full">
              <Book className="h-5 w-5 text-blue-600" />
              <span className="font-medium text-blue-800">
                {learningPath.length} Lessons
              </span>
            </div>

            <div className="flex items-center gap-2 bg-emerald-50 px-4 py-2 rounded-full">
              <Check className="h-5 w-5 text-emerald-600" />
              <span className="font-medium text-emerald-800">
                {completedTopics} Completed
              </span>
            </div>

            <div className="flex items-center gap-2 bg-indigo-50 px-4 py-2 rounded-full">
              <Clock className="h-5 w-5 text-indigo-600" />
              <span className="font-medium text-indigo-800">
                {learningPath.reduce(
                  (total, topic) => total + topic.estimatedHours,
                  0
                )}{" "}
                Hours
              </span>
            </div>
          </div>
        </motion.div>

        <div className="relative pb-10">
          {/* Timeline progress bar */}
          <div className="absolute left-0 md:left-[80px] top-0 bottom-0 w-1 bg-gray-200">
            <motion.div
              className="absolute top-0 left-0 w-full bg-blue-500 rounded-full"
              initial={{ height: "0%" }}
              animate={{ height: `${progressPercentage}%` }}
              transition={{ duration: 1, ease: "easeInOut" }}
            />
          </div>

          {/* Main content */}
          <div className="flex flex-col gap-8">
            {learningPath.map((topic, index) => {
              const isCurrentTopic = index === currentPosition;

              return (
                <motion.div
                  key={topic.day}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.5,
                  }}
                  className="flex"
                >
                  {/* Left side - timeline marker */}
                  <div className="relative mr-6 md:mr-12 min-w-[60px] flex items-center justify-center">
                    <div
                      className={`
                        absolute z-0 w-10 h-10 rounded-full border-2 
                        ${
                          isCurrentTopic
                            ? "border-blue-500"
                            : topic.isCompleted
                            ? "border-emerald-500"
                            : "border-gray-200"
                        }
                      `}
                    />

                    {isCurrentTopic && (
                      <motion.div
                        className="absolute z-10 w-12 h-12 rounded-full bg-blue-100"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                      />
                    )}

                    {isCurrentTopic ? (
                      <motion.div
                        className="relative z-20 flex items-center justify-center"
                        animate={{ y: [0, -3, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                      >
                        <User className="w-5 h-5 text-blue-700" />
                      </motion.div>
                    ) : topic.isCompleted ? (
                      <Check className="relative z-20 w-5 h-5 text-emerald-500" />
                    ) : (
                      <span className="relative z-20 w-4 h-4 rounded-full bg-gray-300" />
                    )}
                  </div>

                  {/* Right side - content */}
                  <div className="flex-1">
                    <Card
                      className={`
                        overflow-hidden border-l-4 w-full transform transition-all hover:shadow-lg
                        ${
                          isCurrentTopic
                            ? "border-l-blue-500 shadow-md shadow-blue-100"
                            : topic.isCompleted
                            ? "border-l-emerald-500"
                            : "border-l-gray-200"
                        }
                      `}
                    >
                      <CardContent className="p-0">
                        <Accordion type="single" collapsible className="w-full">
                          <AccordionItem
                            value={`item-${index}`}
                            className="border-b-0"
                          >
                            <div className="flex flex-col md:flex-row md:items-center justify-between p-5">
                              <div className="flex-1">
                                <div className="flex flex-wrap gap-2 mb-2">
                                  <div className="bg-blue-50 text-blue-600 text-sm font-semibold px-3 py-1 rounded-full">
                                    Day {topic.day}
                                  </div>
                                  <Badge
                                    variant="outline"
                                    className={`
                                      ${
                                        topic.difficulty === "Easy"
                                          ? "bg-emerald-50 text-emerald-600 border-emerald-200"
                                          : "bg-amber-50 text-amber-600 border-amber-200"
                                      }
                                    `}
                                  >
                                    {topic.difficulty}
                                  </Badge>
                                  <div className="flex items-center text-gray-500">
                                    <Clock className="h-3.5 w-3.5 mr-1" />
                                    <span className="text-xs">
                                      {topic.estimatedHours}h
                                    </span>
                                  </div>
                                </div>

                                <h3 className="text-xl font-semibold mt-2 text-gray-800">
                                  {topic.topic}
                                </h3>
                              </div>

                              <Button
                                variant={
                                  topic.isCompleted ? "ghost" : "outline"
                                }
                                size="sm"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleTopicCompletion(index);
                                }}
                                className={`mt-3 md:mt-0 ${
                                  topic.isCompleted
                                    ? "text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50"
                                    : "text-blue-600 hover:text-blue-700 hover:bg-blue-50"
                                }`}
                              >
                                {topic.isCompleted ? (
                                  <>
                                    <Check className="mr-2" size={18} />
                                    Completed
                                  </>
                                ) : (
                                  <>Mark Complete</>
                                )}
                              </Button>
                            </div>

                            <AccordionTrigger className="px-5 pt-0 pb-3">
                              <span className="text-sm text-blue-600">
                                View Details
                              </span>
                            </AccordionTrigger>

                            <AccordionContent className="px-5 pb-5 pt-0">
                              <AnimatePresence>
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: "auto" }}
                                  exit={{ opacity: 0, height: 0 }}
                                  transition={{ duration: 0.2 }}
                                >
                                  <p className="text-gray-700 mb-4">
                                    {topic.description}
                                  </p>

                                  <Separator className="my-4" />

                                  <div className="rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50 p-4 flex items-start">
                                    <BookOpen className="h-5 w-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                                    <div>
                                      <h4 className="font-medium text-gray-800 mb-1">
                                        Recommended Resource
                                      </h4>
                                      <a
                                        href={topic.resource.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex items-center text-blue-600 hover:text-blue-700"
                                      >
                                        <span className="group-hover:underline">
                                          {topic.resource.title}
                                        </span>
                                        <ExternalLink
                                          size={14}
                                          className="ml-1.5 inline-block"
                                        />
                                      </a>
                                    </div>
                                  </div>
                                </motion.div>
                              </AnimatePresence>
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="mt-10 bg-gradient-to-r from-white to-blue-50 rounded-xl p-6 shadow-sm border border-blue-100"
        >
          <div className="flex flex-col md:flex-row justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-800">
              Overall Progress
            </h2>
            <p className="text-blue-600 font-medium">
              {completedTopics} of {learningPath.length} lessons completed
            </p>
          </div>

          <Progress value={progressPercentage} className="h-3 bg-blue-100" />

          <div className="mt-4 flex justify-between text-sm text-gray-500">
            <span>Just started</span>
            <span>Halfway there</span>
            <span>React Master</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Roadmap;
