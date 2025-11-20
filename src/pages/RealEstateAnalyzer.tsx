import { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeft, Loader2, Mail, CheckCircle2, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";

const RealEstateAnalyzer = () => {
  const [email, setEmail] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [selectedRooms, setSelectedRooms] = useState<number[]>([2]);
  const [selectedDistricts, setSelectedDistricts] = useState<string[]>(['all']);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const districts = [
    { value: 'all', label: 'All Districts', tier: 0 },
    { value: 'Teika', label: 'Teika', tier: 1 },
    { value: 'Āgenskalns', label: 'Āgenskalns', tier: 1 },
    { value: 'Purvciems', label: 'Purvciems', tier: 1 },
    { value: 'Zolitūde', label: 'Zolitūde', tier: 1 },
    { value: 'Imanta', label: 'Imanta', tier: 2 },
    { value: 'Ziepniekkalns', label: 'Ziepniekkalns', tier: 2 },
    { value: 'Kengarags', label: 'Kengarags', tier: 2 },
    { value: 'Mežciems', label: 'Mežciems', tier: 2 },
    { value: 'Pļavnieki', label: 'Pļavnieki', tier: 3 },
    { value: 'Jugla', label: 'Jugla', tier: 3 },
    { value: 'Iļģuciems', label: 'Iļģuciems', tier: 3 },
  ];

  const rooms = [1, 2, 3, 4];

  const handleDistrictChange = (district: string) => {
    if (district === 'all') {
      setSelectedDistricts(['all']);
    } else {
      const newDistricts = selectedDistricts.filter(d => d !== 'all');
      if (selectedDistricts.includes(district)) {
        const filtered = newDistricts.filter(d => d !== district);
        setSelectedDistricts(filtered.length === 0 ? ['all'] : filtered);
      } else {
        setSelectedDistricts([...newDistricts, district]);
      }
    }
  };

  const handleRoomChange = (room: number) => {
    if (selectedRooms.includes(room)) {
      const filtered = selectedRooms.filter(r => r !== room);
      setSelectedRooms(filtered.length === 0 ? [room] : filtered);
    } else {
      setSelectedRooms([...selectedRooms, room]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('error');
      setMessage('Please enter a valid email address');
      return;
    }

    setStatus('loading');
    setMessage('');

    try {
      const response = await fetch('https://garrige.app.n8n.cloud/webhook/0e62a683-10a8-445f-9eb1-5fdc6122cdf1', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          maxPrice: maxPrice ? parseInt(maxPrice) : null,
          rooms: selectedRooms,
          districts: selectedDistricts,
          timestamp: new Date().toISOString()
        })
      });

      if (response.ok) {
        setStatus('success');
        setMessage('Analysis started! Check your email in 5-10 minutes for results.');
      } else {
        throw new Error('Failed to start analysis');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Something went wrong. Please try again or contact support.');
      console.error('Error:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-card">
      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-8">
          <Link to="/">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Portfolio
            </Button>
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Riga Real Estate Analyzer
          </h1>
          <p className="text-lg text-muted-foreground">
            AI-powered apartment analysis. Find underpriced deals automatically.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Main Form */}
          <Card className="lg:col-span-2 p-6 md:p-8 border-2 border-primary/30 bg-card/80 backdrop-blur-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email */}
              <div>
                <Label htmlFor="email" className="text-base font-semibold flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  Your Email*
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-2"
                  required
                />
                <p className="text-sm text-muted-foreground mt-1">
                  Results will be sent here
                </p>
              </div>

              {/* Rooms */}
              <div>
                <Label className="text-base font-semibold mb-3 block">
                  Number of Rooms
                </Label>
                <div className="flex flex-wrap gap-3">
                  {rooms.map((room) => (
                    <div key={room} className="flex items-center space-x-2">
                      <Checkbox
                        id={`room-${room}`}
                        checked={selectedRooms.includes(room)}
                        onCheckedChange={() => handleRoomChange(room)}
                      />
                      <label
                        htmlFor={`room-${room}`}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                      >
                        {room} {room === 1 ? 'room' : 'rooms'}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Districts */}
              <div>
                <Label className="text-base font-semibold mb-3 block">
                  Districts
                </Label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {districts.map((district) => (
                    <div key={district.value} className="flex items-center space-x-2">
                      <Checkbox
                        id={`district-${district.value}`}
                        checked={selectedDistricts.includes(district.value)}
                        onCheckedChange={() => handleDistrictChange(district.value)}
                      />
                      <label
                        htmlFor={`district-${district.value}`}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                      >
                        {district.label}
                        {district.tier === 1 && ' ⭐'}
                      </label>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  ⭐ = Premium districts
                </p>
              </div>

              {/* Max Price */}
              <div>
                <Label htmlFor="maxPrice" className="text-base font-semibold">
                  Maximum Price (Optional)
                </Label>
                <div className="relative mt-2">
                  <Input
                    id="maxPrice"
                    type="number"
                    placeholder="e.g., 80000"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                    EUR
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  Leave empty for no limit
                </p>
              </div>

              {/* Status Message */}
              {message && (
                <div className={`p-4 rounded-lg flex items-start gap-3 border-2 ${
                  status === 'success' ? 'bg-green-500/10 text-green-600 border-green-500/30' :
                  status === 'error' ? 'bg-red-500/10 text-red-600 border-red-500/30' :
                  'bg-blue-500/10 text-blue-600 border-blue-500/30'
                }`}>
                  {status === 'success' && <CheckCircle2 className="h-5 w-5 mt-0.5" />}
                  {status === 'error' && <AlertCircle className="h-5 w-5 mt-0.5" />}
                  <p className="text-sm">{message}</p>
                </div>
              )}

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full h-12 text-base"
                disabled={status === 'loading' || status === 'success'}
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Analyzing...
                  </>
                ) : status === 'success' ? (
                  <>
                    <CheckCircle2 className="mr-2 h-5 w-5" />
                    Analysis Started
                  </>
                ) : (
                  'Start Analysis'
                )}
              </Button>
            </form>
          </Card>

          {/* Info Sidebar */}
          <div className="space-y-6">
            <Card className="p-6 border-2 border-primary/30 bg-card/80 backdrop-blur-sm">
              <h3 className="font-semibold text-lg mb-4">How it works</h3>
              <ol className="space-y-3 text-sm">
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center font-semibold text-primary">
                    1
                  </span>
                  <span>Enter your email and search criteria</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center font-semibold text-primary">
                    2
                  </span>
                  <span>AI scrapes ss.lv and analyzes 100+ listings</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center font-semibold text-primary">
                    3
                  </span>
                  <span>Get top 5-10 best deals sent to your email</span>
                </li>
              </ol>
            </Card>

            <Card className="p-6 border-2 border-primary/30 bg-primary/5 backdrop-blur-sm">
              <h3 className="font-semibold text-lg mb-2">What AI analyzes</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Price per m² vs market average</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>District quality & infrastructure</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Building series (103, 119, 602, etc.)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Investment potential</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6 border-2 border-primary/30 bg-card/80 backdrop-blur-sm">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">100% Free</strong>
                <br />
                This tool is a showcase of my n8n automation skills. Want similar automation for your business?{' '}
                <Link to="/#contact" className="text-primary hover:underline">
                  Contact me
                </Link>
              </p>
            </Card>
          </div>
        </div>

        {/* Features */}
        <div className="mt-12 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card className="p-6 text-center border-2 border-primary/20 bg-card/80 backdrop-blur-sm hover:border-primary/40 transition-all">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🤖</span>
            </div>
            <h3 className="font-semibold mb-2">AI-Powered</h3>
            <p className="text-sm text-muted-foreground">
              Claude analyzes each listing against 20+ market benchmarks
            </p>
          </Card>
          <Card className="p-6 text-center border-2 border-primary/20 bg-card/80 backdrop-blur-sm hover:border-primary/40 transition-all">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="font-semibold mb-2">Real-time Data</h3>
            <p className="text-sm text-muted-foreground">
              Fresh listings scraped directly from ss.lv
            </p>
          </Card>
          <Card className="p-6 text-center border-2 border-primary/20 bg-card/80 backdrop-blur-sm hover:border-primary/40 transition-all">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📊</span>
            </div>
            <h3 className="font-semibold mb-2">Market Insights</h3>
            <p className="text-sm text-muted-foreground">
              Compare prices, districts, and building types instantly
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default RealEstateAnalyzer;
