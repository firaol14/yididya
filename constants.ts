import { XCircle, CheckCircle, Clock, Shield, Target, Zap, Phone, BookOpen, Calendar } from 'lucide-react';

export const PAIN_POINTS = [
  {
    title: "Chronic Procrastination",
    description: "Putting things off until the last minute, constantly fighting against the clock.",
    icon: Clock
  },
  {
    title: "Inconsistency",
    description: "Starting strong but losing motivation after a few days. The cycle never ends.",
    icon: XCircle
  },
  {
    title: "Overwhelm",
    description: "Feeling paralyzed by how much you have to do, leading to doing nothing at all.",
    icon: Zap
  },
  {
    title: "Lack of Structure",
    description: "No clear plan on how to get from A to B. Just guessing and hoping for the best.",
    icon: Target
  }
];

export const ROADMAP_STEPS = [
  {
    month: "Month 1",
    title: "The Reset",
    description: "We reset your mindset and build a solid foundation. We identify the root causes of your procrastination and clear the mental clutter.",
    color: "from-blue-500 to-cyan-400"
  },
  {
    month: "Month 2",
    title: "The Structure",
    description: "We create a customized daily system and develop strong habits that stick. You'll learn to operate with precision rather than motivation.",
    color: "from-brand-green to-emerald-400"
  },
  {
    month: "Month 3",
    title: "The Mastery",
    description: "You learn to stay consistent and master long-term success. We remove the training wheels so you can fly on your own.",
    color: "from-purple-500 to-pink-500"
  }
];

export const PROGRAM_INCLUDES = [
  {
    title: "High-Frequency Coaching",
    description: "3 Sessions per week (1 hour 30 minutes each). We keep the momentum high so you never fall behind.",
    icon: Calendar
  },
  {
    title: "Direct Access to Me",
    description: "Text, Video Calls, and Emails whenever you need support. You're never stuck alone.",
    icon: Phone
  },
  {
    title: "Personalized Strategy",
    description: "A customized plan based on your specific goals and struggles. No cookie-cutter advice.",
    icon: Target
  },
  {
    title: "Weekly Action Plans",
    description: "Clear, non-negotiable steps to take every single week to ensure progress.",
    icon: CheckCircle
  },
  {
    title: "Resources & Tools",
    description: "Full access to productivity guides, habit trackers, and exclusive materials.",
    icon: Shield
  },
  {
    title: "Physical Journal Bonus",
    description: "A Free Physical Journal or Planner to track your progress tangibly.",
    icon: BookOpen
  }
];

export const TESTIMONIALS = [
  {
    name: "Kidist",
    role: "Coaching Client (UK)",
    content: "Things are finally moving forward. You are a great coach... Your support played a big role in helping me get to this point. Thanks to you, I’ve found the strength to grow and take action... Since Grade 8, one of my biggest fears was failure, especially in relationships and personal life. That fear held me back, but now I’ve learned so much. It’s my turn to apply those lessons, focus on my growth, and rise into the higher version of myself.",
    avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=200&auto=format&fit=crop"
  }
];

export const FAQ_ITEMS = [
  {
    question: "Who is this program for?",
    answer: "This is for ambitious individuals who struggle with procrastination, want to be more disciplined, need a structured plan, and are finally ready to make progress toward their goals."
  },
  {
    question: "How does the 1:1 coaching work?",
    answer: "We meet 3 times a week for 1.5 hours each session. You get direct access to me via text/video calls, personalized guides, and deep targeted transformation strategies."
  },
  {
    question: "Is this just motivation?",
    answer: "No. This is NOT just motivation. Motivation fades. This is a structured system to help you become the most disciplined version of yourself through customized strategies and habit tracking."
  },
  {
    question: "What happens after 3 months?",
    answer: "By the end of 3 months, you will have a clear daily system, the ability to stay disciplined even on 'bad days', and the confidence to fly on your own without needing a coach."
  }
];

export const PRICING_FEATURES = [
  "3 Sessions Per Week (1.5 Hours each)",
  "Month 1: Reset Mindset & Foundation",
  "Month 2: Structure & Habits",
  "Month 3: Master Consistency",
  "Direct Access (Calls, Texts, Emails)",
  "Personalized Guides & Programs",
  "Free Journal Book or Planner"
];