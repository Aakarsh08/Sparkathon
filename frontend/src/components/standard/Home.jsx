import React from 'react';
import {
  Typography,
  Card,
  CardBody,
  CardHeader,
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
} from '@material-tailwind/react';
import {
  ChartBarIcon,
  CubeIcon,
  CurrencyDollarIcon,
  ClockIcon,
  ArrowTrendingUpIcon,
  ShoppingBagIcon,
} from '@heroicons/react/24/solid';

const Home = () => {
  return (
    <div className="container mx-auto py-6 px-4">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <Typography variant="h1" className="mb-4">
          RetailIQ
        </Typography>
        <Typography variant="lead" className="text-gray-700">
          Smarter Inventory Management with AI-driven Forecasting
        </Typography>
      </div>

      {/* Retail Challenges */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <Card className="mt-6">
          <CardHeader color="blue" className="relative h-16 ">
            <div className="absolute left-4">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                <ShoppingBagIcon className="w-6 h-6 text-white" />
              </div>
            </div>
          </CardHeader>
          <CardBody className="pt-8">
            <Typography variant="h5" className="mb-2">Overstocking</Typography>
            <ul className="list-disc pl-4">
              <li>Excess inventory holding cost</li>
              <li>Wasted warehouse space</li>
              <li>Risk of product obsolescence</li>
            </ul>
          </CardBody>
        </Card>

        <Card className="mt-6">
          <CardHeader color="green" className="relative h-16">
            <div className="absolute left-4">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                <ClockIcon className="w-6 h-6 text-white" />
              </div>
            </div>
          </CardHeader>
          <CardBody className="pt-8">
            <Typography variant="h5" className="mb-2">Stockouts</Typography>
            <ul className="list-disc pl-4">
              <li>Lost sales opportunities</li>
              <li>Poor customer satisfaction</li>
              <li>Unreliable supplier cycles</li>
            </ul>
          </CardBody>
        </Card>

        <Card className="mt-6">
          <CardHeader color="red" className="relative h-16">
            <div className="absolute left-4">
              <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                <CurrencyDollarIcon className="w-6 h-6 text-white" />
              </div>
            </div>
          </CardHeader>
          <CardBody className="pt-8">
            <Typography variant="h5" className="mb-2">Inefficient Pricing</Typography>
            <ul className="list-disc pl-4">
              <li>Improper discounts</li>
              <li>Loss in margins</li>
              <li>Guess-based strategies</li>
            </ul>
          </CardBody>
        </Card>
      </div>

      {/* Solution Timeline */}
      <Typography variant="h3" className="text-center mb-8">
        Our AI-Driven Approach
      </Typography>
      <Timeline>
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon className="p-2">
              <ArrowTrendingUpIcon className="h-4 w-4" />
            </TimelineIcon>
            <Typography variant="h5">Demand Forecasting</Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography color="gray">
              Predict sales trends using LSTM, ARIMA, and Random Forest models
              for optimized stocking.
            </Typography>
          </TimelineBody>
        </TimelineItem>

        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon className="p-2">
              <CubeIcon className="h-4 w-4" />
            </TimelineIcon>
            <Typography variant="h5">Smart Inventory Sync</Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography color="gray">
              Automatically sync supply needs based on forecasted demand
              and supplier lead times.
            </Typography>
          </TimelineBody>
        </TimelineItem>

        <TimelineItem>
          <TimelineHeader>
            <TimelineIcon className="p-2">
              <ChartBarIcon className="h-4 w-4" />
            </TimelineIcon>
            <Typography variant="h5">What-if Price Simulation</Typography>
          </TimelineHeader>
          <TimelineBody>
            <Typography color="gray">
              Experiment with pricing and discounts to analyze their effect
              on projected revenue and demand.
            </Typography>
          </TimelineBody>
        </TimelineItem>
      </Timeline>

      {/* Architecture Diagram Placeholder */}
      <div className="mt-12 bg-gray-50 p-6 rounded-xl">
        <Typography variant="h4" className="text-center mb-6">
          System Architecture
        </Typography>
        <div className="flex justify-center">
          <img
            src="/soft_arch.png"
            alt="RetailIQ Architecture"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
