import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { toast } from 'sonner';
import { Textarea } from '../ui/textarea';

export function CreatePortfolio() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Portfolio created successfully');
    navigate('/portfolio');
  };

  return (
    <div className="space-y-8 max-w-2xl">
      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle>Portfolio Details</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Portfolio Name</Label>
                <Input
                  id="name"
                  placeholder="e.g. Growth Portfolio"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description (Optional)</Label>
                <Textarea
                  id="description"
                  placeholder="Describe your portfolio strategy..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={4}
                />
              </div>

            </div>

            <div className="flex gap-3 pt-4">
              <Button type="submit" className="flex-1 h-11">
                Create Portfolio
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => navigate('/portfolio')}
              >
                Cancel
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
