import { motion } from "framer-motion";
import { Users, DollarSign, TrendingUp } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function IndexPage() {
  return (
    <div className="container mx-auto px-4 py-16 space-y-32">
      {/* Header with Quick Actions */}
      <motion.section 
        className="flex justify-between items-center mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold tracking-tighter text-orange-500">
          Dashboard
        </h1>
        <div className="flex gap-4">
          <Button size="lg" variant="default" className="bg-teal-500 text-white">
            Invite Investors
          </Button>
          <Button size="lg" variant="default" className="bg-yellow-500 text-white">
            Run a Campaign
          </Button>
        </div>
      </motion.section>

      {/* Dashboard Sections */}
      <motion.section
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="grid gap-8 md:grid-cols-3"
      >
        <motion.div variants={fadeInUp} className="flex flex-col">
          <Card className="bg-orange-100 flex-1">
            <CardHeader>
              <CardTitle className="text-orange-600">Team Productivity</CardTitle>
              <CardDescription className="text-orange-500">
                Track your team's performance and productivity.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-center">
              <Users className="h-16 w-16 text-orange-500" />
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={fadeInUp} className="flex flex-col">
          <Card className="bg-teal-100 flex-1">
            <CardHeader>
              <CardTitle className="text-teal-600">Funding Milestones</CardTitle>
              <CardDescription className="text-teal-500">
                Monitor your funding progress and milestones.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-center">
              <DollarSign className="h-16 w-16 text-teal-500" />
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={fadeInUp} className="flex flex-col">
          <Card className="bg-yellow-100 flex-1">
            <CardHeader>
              <CardTitle className="text-yellow-600">Growth Metrics</CardTitle>
              <CardDescription className="text-yellow-500">
                Analyze your growth metrics and trends.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-center">
              <TrendingUp className="h-16 w-16 text-yellow-500" />
              {/* Placeholder for future chart integration */}
            </CardContent>
          </Card>
        </motion.div>
      </motion.section>
    </div>
  );
}
