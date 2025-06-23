import React from 'react';
import { Typography, Card, CardBody } from '@material-tailwind/react';

const About = () => {
  return (
    <div className="container mx-auto py-6 px-4">
      <Typography variant="h2" className="text-center mb-8">
        About RetailIQ
      </Typography>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <Card>
          <CardBody>
            <Typography variant="h4" color="blue" className="mb-4">
              Our Mission
            </Typography>
            <Typography>
              RetailIQ empowers retailers to optimize inventory, pricing, and demand forecasting
              through machine learning and interactive dashboards. Our goal is to prevent overstocking,
              reduce waste, and improve profit margins.
            </Typography>
          </CardBody>
        </Card>

        <Card>
          <CardBody>
            <Typography variant="h4" color="blue" className="mb-4">
              Technology Stack
            </Typography>
            <Typography>
              Built using advanced data pipelines, AI models, and modern visualization tools:
            </Typography>
            <ul className="list-disc ml-6 mt-2">
              <li>ARIMA & LSTM Forecasting Models</li>
              <li>Node.js & Express REST API</li>
              <li>React & Material Tailwind UI</li>
              <li>Secure Admin & Simulation Panels</li>
            </ul>
          </CardBody>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardBody>
            <Typography variant="h5" color="blue" className="mb-4">
              Demand Forecasting
            </Typography>
            <Typography>
              Predict SKU-level sales trends with daily/weekly granularity to avoid stock imbalances.
            </Typography>
          </CardBody>
        </Card>

        <Card>
          <CardBody>
            <Typography variant="h5" color="blue" className="mb-4">
              Price Simulation
            </Typography>
            <Typography>
              Test what-if discount strategies to find optimal pricing for maximum revenue.
            </Typography>
          </CardBody>
        </Card>

        <Card>
          <CardBody>
            <Typography variant="h5" color="blue" className="mb-4">
              Inventory Optimization
            </Typography>
            <Typography>
              Smart syncing with suppliers and real-time alerts to prevent overstock/stockouts.
            </Typography>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default About;
